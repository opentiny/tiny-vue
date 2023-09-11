import * as hooks from 'react'
import { Svg } from './svg-render.jsx'

import { nextTick, ref, computed, readonly, watchEffect } from './vue-hooks.js'
import { emit, on, off, once, emitEvent } from './event.js'
import { If, Component, Slot, For, Transition } from './virtual-comp.jsx'
import { filterAttrs, vc, getElementCssClass } from './utils.ts'
import { useFiber } from './fiber'
import { useVm } from './vm'
import { useReactive } from './reactive'
import { twMerge } from 'tailwind-merge'
import { stringifyCssClass } from './csscls.ts'

import '@opentiny/vue-theme/base/index.less'

const vue_hooks = { nextTick, ref, computed, readonly, watchEffect }

// emitEvent, dispath, broadcast
export const $prefix = 'Tiny'

export const mergeClass = (...cssClasses) => twMerge(stringifyCssClass(cssClasses))

export const useSetup = ({
  props,
  // context,
  renderless,
  api,
  extendOptions = {},
  // mono = false,
  classes = {},
  constants,
  vm,
  parent
}) => {
  const render = typeof props.tiny_renderless === 'function' ? props.tiny_renderless : renderless
  const { dispath, broadcast } = emitEvent(vm)

  const utils = {
    vm,
    parent,
    emit: emit(props),
    constants,
    nextTick,
    dispath,
    broadcast,
    t() { },
    mergeClass
  }
  const sdk = render(
    props,
    { ...hooks, useReactive, ...vue_hooks },
    utils,
    extendOptions
  )
  const attrs = {
    a: filterAttrs,
    m: mergeClass,
    vm: utils.vm,
    gcls: (key) => getElementCssClass(classes, key),
  }

  if (Array.isArray(api)) {
    api.forEach((name) => {
      const value = sdk[name]

      if (typeof value !== 'undefined') {
        attrs[name] = value
      }
    })
  }

  return attrs
}

export {
  Svg,
  vc,
  If,
  Component,
  Slot,
  For,
  Transition,
  emit,
  on,
  off,
  once,
  emitEvent,
  useVm,
  nextTick,
  useFiber,
  ref,
  computed,
  readonly,
  watchEffect,
  useReactive
}
