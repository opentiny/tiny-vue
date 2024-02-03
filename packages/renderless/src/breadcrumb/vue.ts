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

import type {
  IBreadcrumbProps,
  IBreadcrumbState,
  IBreadcrumbApi,
  IBreadcrumbRenderlessParamUtils,
  ISharedRenderlessParamHooks
} from '@/types'
import { breadcrumbItemSelect } from './index'

export const api = ['breadcrumbItemSelect']

export const renderless = (
  props: IBreadcrumbProps,
  { reactive, provide }: ISharedRenderlessParamHooks,
  { emit, constants, emitter }: IBreadcrumbRenderlessParamUtils
): IBreadcrumbApi => {
  const state: IBreadcrumbState = reactive({
    breadcrumbEmitter: emitter(),
    currentBreadcrumbItem: {}
  })

  const api: IBreadcrumbApi = {
    state,
    breadcrumbItemSelect: () => breadcrumbItemSelect({ api, emit, state, constants })
  }

  provide('breadcrumbEmitter', state.breadcrumbEmitter)

  api.breadcrumbItemSelect()

  return api
}
