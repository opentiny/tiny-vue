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
  IBreadcrumbItemProps,
  IBreadcrumbItemApi,
  IBreadcrumbItemRenderlessParamUtils,
  ISharedRenderlessParamHooks
} from '@/types'
import { linkClick } from './index'

export const api = ['linkClick', 'state']

export const renderless = (
  props: IBreadcrumbItemProps,
  { reactive, inject }: ISharedRenderlessParamHooks,
  { designConfig },
  { refs, router, emit }: IBreadcrumbItemRenderlessParamUtils
) => {
  const breadcrumbEmitter = inject('breadcrumbEmitter')
  const breadcrumb = inject('breadcrumb')
  const constants = breadcrumb._constants
  // separator
  const separator = props.separator || designConfig?.separator || '>'
  const state = reactive({
    size: inject('size', null),
    separator
  })
  const api: IBreadcrumbItemApi = {
    state,
    linkClick: linkClick({ props, refs, router, emit, breadcrumbEmitter, constants })
  }

  return api
}
