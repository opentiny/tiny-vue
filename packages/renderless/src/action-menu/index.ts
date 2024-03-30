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

import type { IActionMenuRenderlessParams, IActionMenuItemData } from '@/types'

export const computedMaxShowNum =
  ({ props, state }: Pick<IActionMenuRenderlessParams, 'props' | 'state'>) =>
  (): number => {
    if (props.maxShowNum !== undefined) {
      return props.maxShowNum
    }
    if (state.isCardMode) {
      return 3
    } else {
      return 2
    }
  }

export const computedSpacing =
  ({ props, state }: Pick<IActionMenuRenderlessParams, 'props' | 'state'>) =>
  (): string => {
    if (props.spacing !== undefined) {
      return String(props.spacing).includes('px') ? props.spacing : props.spacing + 'px'
    }
    if (state.isCardMode) {
      return '10px'
    } else {
      return '5px'
    }
  }

export const computedMoreText =
  ({ props, state, t }: Pick<IActionMenuRenderlessParams, 'props' | 'state', 't'>) =>
  (): string => {
    if (props.moreText !== undefined) {
      return props.moreText
    }
    if (state.isCardMode) {
      return ''
    } else {
      return t('ui.actionMenu.moreText')
    }
  }

export const computedSuffixIcon =
  ({ props, state }: Pick<IActionMenuRenderlessParams, 'props' | 'state'>) =>
  (): string | Object => {
    if (props.suffixIcon) {
      return props.suffixIcon
    }
    if (state.isCardMode) {
      return 'tiny-icon-ellipsis'
    } else {
      return ''
    }
  }

export const handleMoreClick = (emit: IActionMenuRenderlessParams['emit']) => () => {
  emit('more-click')
}

export const handleItemClick = (emit: IActionMenuRenderlessParams['emit']) => (data: IActionMenuItemData) => {
  emit('item-click', data)
}

export const visibleChange = (emit: IActionMenuRenderlessParams['emit']) => (status: boolean) => {
  emit('visible-change', status)
}
