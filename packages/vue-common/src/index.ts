import hooks from './adapter'
import {
  appContext,
  appProperties,
  bindFilter,
  createComponentFn,
  getElementCssClass,
  getElementStatusClass
} from './adapter'
import { defineAsyncComponent, directive, emitter, h, markRaw, Teleport } from './adapter'
import { parseVnode, isEmptyVnode, renderComponent, rootConfig, tools, useRouter, getComponentName } from './adapter'
import { t } from '@opentiny/vue-locale'
import { stringifyCssClass } from './csscls'
import { twMerge } from 'tailwind-merge'
import '@opentiny/vue-theme/base/index.less'

import { defineComponent, isVue2, isVue3 } from './adapter'

export { version } from '../package.json'

export { defineComponent, isVue2, isVue3, appProperties }

export const $prefix = 'Tiny'

export const $props = {
  'tiny_mode': String,
  'tiny_mode_root': Boolean,
  'tiny_template': [Function, Object],
  'tiny_renderless': Function,
  'tiny_theme': String,
  'tiny_chart_theme': Object
}

export const props: Array<
  | 'tiny_mode'
  | 'tiny_mode_root'
  | 'tiny_template'
  | 'tiny_renderless'
  | '_constants'
  | 'tiny_theme'
  | 'tiny_chart_theme'
> = ['tiny_mode', 'tiny_mode_root', 'tiny_template', 'tiny_renderless', '_constants', 'tiny_theme', 'tiny_chart_theme']

export const resolveMode = (props, context) => {
  let isRightMode = (mode) => ~['pc', 'mobile', 'mobile-first'].indexOf(mode)
  let config = rootConfig(context)
  let tinyModeProp = typeof props.tiny_mode === 'string' ? props.tiny_mode : null
  let tinyModeInject = hooks.inject('TinyMode', null)
  let tinyModeGlobal = config.tiny_mode && config.tiny_mode.value

  if (!isRightMode(tinyModeProp)) tinyModeProp = null
  if (!isRightMode(tinyModeInject)) tinyModeInject = null
  if (!isRightMode(tinyModeGlobal)) tinyModeGlobal = null

  let tinyMode = tinyModeProp || tinyModeInject || tinyModeGlobal || 'pc'

  if (props.tiny_mode_root) {
    hooks.provide('TinyMode', tinyMode)
  }

  let instance = hooks.getCurrentInstance()

  if (isVue2) {
    instance = instance.proxy
  }

  Object.defineProperty(instance, '_tiny_mode', { value: tinyMode })

  return tinyMode
}

const resolveTheme = ({ props, context, utils }) => {
  const isRightTheme = (theme) => ~['tiny', 'saas'].indexOf(theme)
  const config = rootConfig(context)
  let tinyThemeProp = typeof props.tiny_theme === 'string' ? props.tiny_theme : null
  let tinyThemeInject = hooks.inject('TinyTheme', null)
  let tinyThemeGlobal = config.tiny_theme && config.tiny_theme.value

  if (!isRightTheme(tinyThemeProp)) tinyThemeProp = null
  if (!isRightTheme(tinyThemeInject)) tinyThemeInject = null
  if (!isRightTheme(tinyThemeGlobal)) tinyThemeGlobal = null

  const tinyTheme = tinyThemeProp || tinyThemeInject || tinyThemeGlobal || 'tiny'

  return (utils.vm.theme = tinyTheme)
}

const resolveChartTheme = ({ props, context, utils }) => {
  const config = rootConfig(context)
  let tinyChartProp = typeof props.tiny_chart_theme === 'object' ? props.tiny_chart_theme : null
  let tinyChartInject = hooks.inject('TinyChartTheme', null)
  let tinyChartGlobal = config.tiny_chart_theme && config.tiny_chart_theme.value

  const tinyChartTheme = tinyChartProp || tinyChartInject || tinyChartGlobal || null

  return (utils.vm.chart_theme = tinyChartTheme)
}

export const $setup = ({ props, context, template, extend = {} }) => {
  const mode = resolveMode(props, context)
  const view = hooks.computed(() => {
    if (typeof props.tiny_template !== 'undefined') return props.tiny_template

    const component = template(mode, props)

    return typeof component === 'function' ? defineAsyncComponent(component) : component
  })

  return renderComponent({ view, props, context, extend })
}

export const mergeClass = (...cssClasses) => twMerge(stringifyCssClass(cssClasses))

// 提供给没有renderless层的组件使用（比如TinyVuePlus组件）
export const design = {
  configKey: Symbol('designConfigKey'),
  configInstance: null
}

// 注入规范配置
export const provideDesignConfig = (designConfig) => {
  if (Object.keys(designConfig).length) {
    hooks.provide(design.configKey, designConfig)
    design.configInstance = designConfig
  }
}

const createComponent = createComponentFn(design)

interface DesignConfig {
  components?: any
  name?: string
  version?: string
}

export const setup = ({ props, context, renderless, api, extendOptions = {}, mono = false, classes = {} }) => {
  const render = typeof props.tiny_renderless === 'function' ? props.tiny_renderless : renderless

  // 获取组件级配置和全局配置（inject需要带有默认值，否则控制台会报警告）
  const globalDesignConfig: DesignConfig = hooks.inject(design.configKey, {})
  const designConfig = globalDesignConfig?.components?.[getComponentName().replace($prefix, '')]

  const utils = {
    $prefix,
    t,
    ...tools(context, resolveMode(props, context)),
    mergeClass,
    designConfig,
    globalDesignConfig
  }

  resolveTheme({ props, context, utils })
  resolveChartTheme({ props, context, utils })
  const sdk = render(props, hooks, utils, extendOptions)

  // 加载全局配置，合并api
  if (typeof designConfig?.renderless === 'function') {
    Object.assign(sdk, designConfig.renderless(props, hooks, utils, sdk))
  }

  const attrs = {
    t,
    vm: utils.vm,
    f: bindFilter,
    a: filterAttrs,
    d: utils.defineInstanceProperties,
    dp: utils.defineParentInstanceProperties,
    gcls: (key) => getElementCssClass(classes, key),
    m: mergeClass
  }

  /**
   * 修复 render 函数下 this.slots 不会动态更新的问题（vue3 环境没有问题）
   * 解决方法：在 instance 下注入 slots、scopedSlots
   * 注意：renderless 下尽量使用 vm.$refs、vm.$slots
   */
  attrs.d({
    slots: { get: () => utils.vm.$slots },
    scopedSlots: { get: () => utils.vm.$scopedSlots }
  })

  attrs.dp({
    slots: { get: () => utils.parent.$slots },
    scopedSlots: { get: () => utils.parent.$scopedSlots }
  })

  initComponent()

  Array.isArray(api) &&
    api.forEach((name) => {
      const value = sdk[name]

      if (typeof value !== 'undefined') {
        attrs[name] = value
        // 只有单层组件，才需要给setup传递： mono:true
        // 双层组件，需要把内层的api复制到外层，这样用户应用的ref才能拿到组件的api
        if (!mono) {
          utils.setParentAttribute({ name, value })
        }
      }
    })

  return attrs
}

export const svg = ({ name = 'Icon', component }) => {
  return (propData?) =>
    markRaw(
      defineComponent({
        name: $prefix + name,
        setup: (props, context) => {
          const { fill, width, height, 'custom-class': customClass } = context.attrs || {}
          const mergeProps = Object.assign({}, props, propData || null)
          const mode = resolveMode(mergeProps, context)
          const isMobileFirst = mode === 'mobile-first'
          const tinyTag = { 'data-tag': isMobileFirst ? 'tiny-svg' : null }
          const attrs = isVue3 ? tinyTag : { attrs: tinyTag }
          const className = isMobileFirst
            ? mergeClass('h-4 w-4 inline-block', customClass || '', mergeProps.class || '')
            : 'tiny-svg'
          const extend = Object.assign(
            {
              style: { fill, width, height },
              class: className,
              isSvg: true
            },
            attrs
          )

          // 解决本地运行会报大量警告的问题
          if (process.env.BUILD_TARGET) {
            extend.nativeOn = context.listeners
          }

          // 解决富文本组件工具栏图标大小不正确的问题
          if (name.indexOf('IconRichText') !== -1) {
            if (!isVue3) {
              extend.attrs.viewBox = '0 0 24 24'
            } else {
              extend.viewBox = '0 0 24 24'
            }
          }

          return renderComponent({
            component,
            props: mergeProps,
            context,
            extend
          })
        }
      })
    )
}

export const filterAttrs = (attrs, filters, include) => {
  const props = {}

  for (let name in attrs) {
    const find = filters.some((r) => new RegExp(r).test(name))

    if ((include && find) || (!include && !find)) {
      props[name] = attrs[name]
    }
  }

  return props
}

export let setupComponent = {}

export const initComponent = () => {
  for (let name in setupComponent) {
    const component = setupComponent[name]

    if (typeof component.install === 'function') {
      component.install(appContext())
    }

    if (typeof component.init === 'function') {
      component.init(appProperties())
    }
  }

  setupComponent = {}
}

export const $install = (component) => {
  component.install = function (Vue) {
    Vue.component(component.name, component)
  }
}

export type {
  PropType,
  ExtractPropTypes,
  DefineComponent,
  ComponentPublicInstance,
  SetupContext,
  ComputedRef
} from './adapter'

export {
  h,
  hooks,
  directive,
  parseVnode,
  isEmptyVnode,
  useRouter,
  emitter,
  createComponent,
  defineAsyncComponent,
  getElementStatusClass,
  Teleport
}

export default {
  h,
  directive,
  parseVnode,
  isEmptyVnode,
  useRouter,
  emitter,
  createComponent,
  defineAsyncComponent,
  filterAttrs,
  initComponent,
  setupComponent,
  svg,
  $prefix,
  $props,
  props,
  $setup,
  setup,
  hooks,
  getElementStatusClass,
  $install
}
