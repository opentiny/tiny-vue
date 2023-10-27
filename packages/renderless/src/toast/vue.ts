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

import { ISharedRenderlessParamHooks } from 'types/shared.type'
import { timeout } from './index'
import { IToastApi, IToastState, IToastProps } from 'types/toast.type'

export const api = ['state', 'timeout']

export const renderless = (props: IToastProps, { reactive }: ISharedRenderlessParamHooks, { vm, emit }): IToastApi => {
  const state: IToastState = reactive({
    text: props.text,
    type: props.type,
    time: props.time as number
  })

  console.log(state, props)

  const api: IToastApi = {
    state,
    timeout: timeout(emit)
  }

  return api
}
