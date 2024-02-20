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

import type { ICascaderMenuRenderlessParams, ICascaderMenuState } from '@/types'

export const handleExpand = (state: ICascaderMenuState) => (e: MouseEvent) =>
  (state.activeNode = e.target as HTMLElement)

export const handleMouseMove =
  ({
    api,
    parent,
    vm,
    state,
    svg
  }: Pick<ICascaderMenuRenderlessParams, 'api' | 'parent' | 'state' | 'vm'> & {
    svg: string
  }) =>
  (e: MouseEvent) => {
    const hoverZone = vm.$refs.hoverZone

    if (!state.activeNode || !hoverZone) {
      return
    }

    if (state.activeNode.contains(e.target as HTMLElement)) {
      if (state.hoverTimer) {
        clearTimeout(state.hoverTimer)
      }

      const { left } = vm.$refs.cascaderMenu.$parent.$el.getBoundingClientRect()
      const startX = e.clientX - left
      const { offsetWidth, offsetHeight } = vm.$refs.cascaderMenu.$parent.$el
      const top = state.activeNode.offsetTop
      const bottom = top + state.activeNode.offsetHeight

      hoverZone.innerHTML = `
      ${svg}${startX} ${top} L${offsetWidth} 0 V${top} Z" />
      ${svg}${startX} ${bottom} L${offsetWidth} ${offsetHeight} V${bottom} Z" />
    `
    } else if (!state.hoverTimer) {
      state.hoverTimer = setTimeout(api.clearHoverZone, parent.$parent.state.config.hoverThreshold)
    }
  }

export const clearHoverZone =
  ({ vm }: Pick<ICascaderMenuRenderlessParams, 'vm'>) =>
  () => {
    const { hoverZone } = vm.$refs.hoverZone

    if (!hoverZone) {
      return
    }

    hoverZone.innerHTML = ''
  }
