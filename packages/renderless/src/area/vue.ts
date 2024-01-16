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

import { getRegion, changeOffice, getRep, getOffice, fetchDefaultData, beforeMount } from './index'
import type {
  IAreaProps,
  IAreaApi,
  IAreaState,
  ISharedRenderlessParamHooks,
  ISharedRenderlessParamUtils
} from '@/types'

export const api = ['state', 'getRep', 'getRegion', 'getOffice', 'changeOffice']

export const renderless = (
  props: IAreaProps,
  { onBeforeMount, reactive }: ISharedRenderlessParamHooks,
  { emit, service, refs, nextTick }: ISharedRenderlessParamUtils<never>
) => {
  const api: Partial<IAreaApi> = {}
  const { fetchArea } = service || {}

  const state = reactive<IAreaState>({
    jcr: '',
    region: '',
    rep: '',
    office: '',
    jcrData: [],
    regionData: [],
    repData: [],
    officeData: []
  })

  Object.assign(api, {
    state,
    changeOffice: changeOffice({ emit, state }),
    beforeMount: beforeMount({ api: api as IAreaApi, props }),
    getRep: getRep({ emit, fetchArea, nextTick, props, refs, state }),
    getRegion: getRegion({ emit, fetchArea, nextTick, props, refs, state }),
    getOffice: getOffice({ emit, fetchArea, nextTick, props, refs, state }),
    fetchDefaultData: fetchDefaultData({ emit, fetchArea, nextTick, props, refs, state })
  })

  onBeforeMount((api as IAreaApi).beforeMount)

  return api as IAreaApi
}
