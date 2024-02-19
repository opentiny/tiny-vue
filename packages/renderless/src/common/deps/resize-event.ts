/**
 * Copyright (c) 2022 - present TinyVue Authors.
 * Copyright (c) 2022 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 */

import ResizeObserver from './ResizeObserver'

const isServer = typeof window === 'undefined'
const cacheKey = '__resizeListeners__'

/* istanbul ignore next */
const resizeHandler = (entries) => {
  entries.forEach((entry) => {
    const listeners = entry.target[cacheKey] || []

    if (listeners.length) {
      listeners.forEach((fn) => {
        fn()
      })
    }
  })
}

/* istanbul ignore next */
export const addResizeListener = (el, fn) => {
  if (isServer) {
    return
  }

  if (!el[cacheKey]) {
    el[cacheKey] = []
    el.__ro__ = new ResizeObserver(resizeHandler)
    el.__ro__.observe(el)
  }

  el[cacheKey].push(fn)
}

/* istanbul ignore next */
export const removeResizeListener = (el, fn) => {
  if (!el || !el[cacheKey]) {
    return
  }

  el[cacheKey].splice(el[cacheKey].indexOf(fn), 1)

  if (!el[cacheKey].length) {
    el.__ro__.disconnect()
  }
}
