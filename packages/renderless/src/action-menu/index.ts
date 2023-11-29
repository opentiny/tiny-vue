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

import { IActionMenuRenderlessParams, IActionMenuItemData, IActionMenuRenderlessParamUtils } from '@/types'

export const handleMoreClick = (emit: IActionMenuRenderlessParams['emit']) => () => {
  emit('more-click')
}

export const handleItemClick = (emit: IActionMenuRenderlessParams['emit']) => (data: IActionMenuItemData) => {
  emit('item-click', data)
}

export const visibleChange = (emit: IActionMenuRenderlessParams['emit']) => (status: boolean) => {
  emit('visible-change', status)
}
