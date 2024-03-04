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
import type { ILinkState, ILinkProps, ILinkRenderlessParamUtils, ISharedRenderlessParamHooks, ILinkApi } from '@/types'
import { xss } from '../common/xss'
import { handleClick } from './index'

export const api = ['state', 'handleClick']

export const renderless = (
  props: ILinkProps,
  { inject, reactive, computed }: ISharedRenderlessParamHooks,
  { emit, parent }: ILinkRenderlessParamUtils
): ILinkApi => {
  parent.tinyForm = parent.tinyForm || inject('form', null)

  const state: ILinkState = reactive({
    formDisabled: computed(() => (parent.tinyForm || {}).disabled),
    disabled: computed(() => props.disabled || state.formDisabled),
    href: computed(() => xss.filterUrl(props.href))
  })

  return {
    state,
    handleClick: handleClick({ emit, props, state })
  }
}
