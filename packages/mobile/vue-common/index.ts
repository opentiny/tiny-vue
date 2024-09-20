import hooks from './src/adapter'
import {
  appContext,
  appProperties,
  bindFilter,
  createComponentFn,
  getElementCssClass,
  getElementStatusClass
} from './src/adapter'
import { defineAsyncComponent, directive, emitter, h, markRaw, Teleport, KeepAlive } from './src/adapter'
import {
  parseVnode,
  isEmptyVnode,
  renderComponent,
  rootConfig,
  tools,
  useRouter,
  getComponentName,
  isVnode
} from './src/adapter'
import { t } from '@opentiny/vue-locale'
import { stringifyCssClass, stringifyCssClassObject, stringifyCssClassArray, deduplicateCssClass } from './src/csscls'
import { twMerge } from 'tailwind-merge'
import '@opentiny/vue-theme/base/index.less'
import { defineComponent, isVue2, isVue3 } from './src/adapter'
import { useBreakpoint } from './src/breakpoint'
import { useDefer } from './src/usedefer'

import { useInstanceSlots as createUseInstanceSlots } from '@opentiny/vue-renderless/common/deps/useInstanceSlots'
import { useRelation as createUseRelation } from '@opentiny/vue-renderless/common/deps/useRelation'

export const useInstanceSlots = createUseInstanceSlots({ ...hooks, isVue2 })
export const useRelation = createUseRelation({ ...hooks, isVue2 })

export { stringifyCssClass, stringifyCssClassObject, stringifyCssClassArray, deduplicateCssClass }
export { useBreakpoint, useDefer }

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
  let tinyModeGlobal

  // 解决modal、loading、notify 组件（函数式组件，脱离组件树）的内部组件模式判断错误问题。
  if (typeof config.tiny_mode === 'string') {
    tinyModeGlobal = config.tiny_mode
  } else if (config.tiny_mode) {
    tinyModeGlobal = config.tiny_mode.value
  }

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

export const resolveTheme = (props, context) => {
  const isRightTheme = (theme) => ~['tiny', 'saas'].indexOf(theme)
  const config = rootConfig(context)
  let tinyThemeProp = typeof props.tiny_theme === 'string' ? props.tiny_theme : null
  let tinyThemeInject = hooks.inject('TinyTheme', null)
  let tinyThemeGlobal = config.tiny_theme && config.tiny_theme.value

  if (!isRightTheme(tinyThemeProp)) tinyThemeProp = null
  if (!isRightTheme(tinyThemeInject)) tinyThemeInject = null
  if (!isRightTheme(tinyThemeGlobal)) tinyThemeGlobal = null

  const tinyTheme = tinyThemeProp || tinyThemeInject || tinyThemeGlobal || 'tiny'

  return tinyTheme
}

const resolveChartTheme = (props, context) => {
  const config = rootConfig(context)
  let tinyChartProp = typeof props.tiny_chart_theme === 'object' ? props.tiny_chart_theme : null
  let tinyChartInject = hooks.inject('TinyChartTheme', null)
  let tinyChartGlobal = config.tiny_chart_theme && config.tiny_chart_theme.value

  const tinyChartTheme = tinyChartProp || tinyChartInject || tinyChartGlobal || null

  return tinyChartTheme
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

export const mergeClass = /* @__PURE__ */ (...cssClasses) => twMerge(stringifyCssClass(cssClasses))

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

interface CustomDesignConfig {
  designConfig: null | DesignConfig
}

// 允许自定义主题规范，适用于MetaERP项目
export const customDesignConfig: CustomDesignConfig = {
  designConfig: null
}

export const setup = ({ props, context, renderless, api, extendOptions = {}, mono = false, classes = {} }) => {
  const render = typeof props.tiny_renderless === 'function' ? props.tiny_renderless : renderless

  // 获取组件级配置和全局配置（inject需要带有默认值，否则控制台会报警告）
  const globalDesignConfig: DesignConfig = customDesignConfig.designConfig || hooks.inject(design.configKey, {})
  const designConfig = globalDesignConfig?.components?.[getComponentName().replace($prefix, '')]

  const specifyPc = typeof process === 'object' ? process.env?.TINY_MODE : null
  const utils = {
    $prefix,
    t,
    ...tools(context, resolveMode(props, context)),
    designConfig,
    globalDesignConfig,
    useBreakpoint
  }
  if (specifyPc !== 'pc') {
    utils.mergeClass = mergeClass
  }

  utils.vm.theme = resolveTheme(props, context)
  utils.vm.chartTheme = resolveChartTheme(props, context)
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
    gcls: (key) => getElementCssClass(classes, key)
  }
  if (specifyPc !== 'pc') {
    attrs.m = mergeClass
  }
  /**
   * 修复 render 函数下 this.slots 不会动态更新的问题（vue3 环境没有问题）
   * 解决方法：在 instance 下注入 slots、scopedSlots
   * 注意：renderless 下尽量使用 vm.$refs、vm.$slots
   */
  attrs.d({
    slots: { get: () => utils.vm.$slots, configurable: true },
    scopedSlots: { get: () => utils.vm.$scopedSlots, configurable: true }
  })

  attrs.dp({
    slots: { get: () => utils.parent.$slots, configurable: true },
    scopedSlots: { get: () => utils.parent.$scopedSlots, configurable: true }
  })

  initComponent()

  if (Array.isArray(api)) {
    // 允许 design里定义的api扩展出来，
    if (Array.isArray(designConfig?.api)) {
      api = api.concat(designConfig.api)
    }
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
  }

  return attrs
}

// 这里需要使用函数声明语句，可以提升变量，保证saas-common可以正常运行
export function svg({ name = 'Icon', component }) {
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
          let className = 'tiny-svg'

          const specifyPc = typeof process === 'object' ? process.env?.TINY_MODE : null
          if (specifyPc !== 'pc' && isMobileFirst) {
            className = mergeClass('h-4 w-4 inline-block', customClass || '', mergeProps.class || '')
          }

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
/**
 * 将用户传入的 $attrs中的属性， 与 filters 中传入的属性做对比。
 * 如果include ,  且属性在filters中， 则返回。
 * 如果 !include, 且属性不匹配filters， 则返回。
 * 在模板中，都是通过 v-bind="a($attrs,[])" 来使用该函数 。
 * @mark 由于现在组件都移除了 inheritAttrs。 加在外层的 v-bind="a()"" 都可以去掉了， 否则会出现双份效果。
 *
 * @param attrs : Object
 * @param filters : string[]
 * @param include : boolean
 *
 * @example Button-pc中： v-bind="a($attrs, ['class', 'style', 'title', 'id'], true)"
 * @exampleResult 把用户使用<tiny-button ...id\class> 等属性，会传递给该位置的dom。
 *
 * @example Area-pc中： v-bind="a($attrs, ['^on[A-Z]'])"
 * @exampleResult 把用户使用<tiny-area ...on> 等事件, 不会传递给内部的select上， 但是class,style等，会传递给select上。
 */
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

// eslint-disable-next-line import/no-mutable-exports
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
  Teleport,
  KeepAlive,
  isVnode
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
  $install,
  isVnode
}
