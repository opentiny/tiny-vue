import hooks from './adapter'
import {
  appContext,
  appProperties,
  bindFilter,
  createComponent
} from './adapter'
import { defineAsyncComponent, directive, emitter, h, markRaw, Teleport } from './adapter'
import { parseVnode, renderComponent, rootConfig, tools, useRouter } from './adapter'
import { t } from '@opentiny/vue-locale'
import '@opentiny/vue-theme/base/index.less'

import { defineComponent, isVue2, isVue3 } from './adapter'
export { defineComponent, isVue2, isVue3, appProperties }

export const $prefix = 'Tiny'

const tinyMap = {
  tinyMode: 'tiny_mode',
  tinyModeRoot: 'tiny_mode_root',
  tinyTemplate: 'tiny_template',
  tinyRenderless: 'tiny_renderless'
}

export const $props = {
  [tinyMap.tinyMode]: String,
  [tinyMap.tinyModeRoot]: Boolean,
  [tinyMap.tinyTemplate]: [Function, Object],
  [tinyMap.tinyRenderless]: Function
}

export const props = ['tiny_mode', 'tiny_mode_root', 'tiny_template', 'tiny_renderless', '_constants']

const resolveMode = (props, context) => {
  let isRightMode = (mode) => ~['pc', 'mobile'].indexOf(mode)
  let config = rootConfig(context)
  let tinyModeProp = typeof props.tiny_mode === 'string' ? props.tiny_mode : null
  let tinyModeInject = hooks.inject('TinyMode', null)
  let tinyModeGlobal = config.tiny_mode && config.tiny_mode.value

  !isRightMode(tinyModeProp) && (tinyModeProp = null)
  !isRightMode(tinyModeInject) && (tinyModeInject = null)
  !isRightMode(tinyModeGlobal) && (tinyModeGlobal = null)

  let tinyMode = tinyModeProp || tinyModeInject || tinyModeGlobal || 'pc'

  if (props.tiny_mode_root) {
    hooks.provide('TinyMode', tinyMode)
  }

  return tinyMode
}

export const $setup = ({ props, context, template, extend = {} }) => {
  const view = hooks.computed(() => {
    if (typeof props.tiny_template !== 'undefined') return props.tiny_template

    const component = template(resolveMode(props, context), props)

    return typeof component === 'function' ? defineAsyncComponent(component) : component
  })

  initComponent()

  return renderComponent({ view, props, context, extend })
}

export const setup = ({ props, context, renderless, api, extendOptions = {}, mono = false }) => {
  const render = typeof props.tiny_renderless === 'function' ? props.tiny_renderless : renderless
  const utils = { $prefix, t, ...tools(context) }
  const sdk = render(props, hooks, utils, extendOptions)

  const attrs = {
    t,
    vm: utils.vm,
    f: bindFilter,
    a: filterAttrs,
    d: utils.defineInstanceProperties,
    dp: utils.defineParentInstanceProperties
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
        mono || utils.setParentAttribute({ name, value })
      }
    })

  return attrs
}

export const svg = ({ name = 'Icon', component }) => {
  return () =>
    markRaw({
      name: $prefix + name,
      setup: (props, context) => {
        const { fill, width, height } = context.attrs || {}
        const extend = Object.assign(
          {
            style: { fill, width, height },
            class: { 'tiny-svg': true }
          }
        )

        extend.isSvg = true

        // 解决本地运行会报大量警告的问题
        if (process.env.BUILD_TARGET) {
          extend.nativeOn = context.listeners
        }

        return renderComponent({
          component,
          props,
          context,
          extend
        })
      }
    })
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

export const version = process.env.COMPONENT_VERSION

export type { PropType, ExtractPropTypes, DefineComponent } from './adapter'

export {
  h,
  hooks,
  directive,
  parseVnode,
  useRouter,
  emitter,
  createComponent,
  defineAsyncComponent,
  Teleport
}

export default {
  h,
  directive,
  parseVnode,
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
  $install
}
