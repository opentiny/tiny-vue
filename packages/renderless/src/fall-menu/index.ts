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

import { REFRESH_INTERVAL } from '../common'
import { on, off } from '../common/deps/dom'
import PopupManager from '../common/deps/popup-manager'
import { xss } from '../common/xss.js'
import type { IFallMenuApi, IFallMenuState, IFallMenuProps, IPagerData } from '@/types'

export const arrowClick = (state: IFallMenuState) => (opt) => {
  state.pager += opt
}

export const overContent = (state: IFallMenuState) => (on) => {
  state.isActive = on
}

export const mouseover =
  ({ fall, props, state }: { fall: any; props: IFallMenuProps; state: IFallMenuState }) =>
  (index) => {
    const popupBox = fall.value

    state.activeNode = index

    let level2Array = props.data[index].children || []

    level2Array.forEach((level2) => {
      let level3Array = level2.children || []

      level3Array.forEach((level3) => {
        level3.url = xss.filterUrl(level3.url)
      })
    })

    state.level2data = level2Array

    if (popupBox && state.level2data.length > 0) {
      popupBox.style.zIndex = PopupManager.nextZIndex()
      state.isActive = true
    }
  }

export const mouseout = (state: IFallMenuState) => () => {
  state.isActive = false
  state.activeNode = null
}

export const computePx =
  ({ props, refs, state }: { props: IFallMenuProps; refs: any; state: IFallMenuState }) =>
  () => {
    const list = refs.list
    const width = list.parentElement.clientWidth
    const arr = list.querySelectorAll('li') as NodeListOf<HTMLLIElement>
    const set: IPagerData = {
      data: [],
      offset: [],
      index: []
    }
    const liWidth: number[] = []
    let innerwidth = 0
    let start = 0

    for (let i = 0, len = arr.length; i < len; i++) {
      innerwidth += arr[i].clientWidth
      liWidth.push(arr[i].clientWidth)

      if (innerwidth > width || i === len - 1) {
        // todo set.data 类型待确认
        set.data.push(props.data.slice(start, i) as any)
        set.offset.push(`-${arr[start].offsetLeft}px`)
        set.index.push(i)

        innerwidth = arr[i].clientWidth
        start = i
      }
    }

    const pagers = set.index.length

    const lastRange = set.data.length === 1 ? liWidth : liWidth.slice(set.index[pagers - 2], set.index[pagers])

    if (lastRange.reduce((a, b) => a + b) > width) {
      set.data.push(props.data[start])
      set.offset.push(`-${arr[start].offsetLeft}px`)
    }

    set.size = set.data.length
    state.pagerData = set
  }

export const reRender =
  ({ api, state, timeout }: { api: IFallMenuApi; state: IFallMenuState; timeout?: NodeJS.Timeout }) =>
  () => {
    timeout && clearTimeout(timeout)

    timeout = setTimeout(() => {
      api.computePx()
    }, REFRESH_INTERVAL)

    state.pager = 1
  }

export const mounted =
  ({ api }) =>
  () => {
    api.computePx()
    on(window, 'resize', api.reRender)
  }

/* istanbul ignore next */
export const beforeDestroy = (api) => () => off(window, 'resize', api.reRender)

export const computeLeft =
  ({ state }) =>
  () =>
    state.pagerData.offset[state.pager - 1]

export const computeData =
  ({ props }: { props: IFallMenuProps }) =>
  () => {
    if (Array.isArray(props.data) && props.data.length) {
      props.data.forEach((level1) => {
        level1.url = xss.filterUrl(level1.url)
      })
    }

    return props.data
  }
