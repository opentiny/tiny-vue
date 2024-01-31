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

import {
  mouseover,
  mouseout,
  computePx,
  reRender,
  arrowClick,
  overContent,
  mounted,
  beforeDestroy,
  computeLeft,
  computeData
} from './index'
import type {
  ISharedRenderlessFunctionParams,
  ISharedRenderlessParamUtils,
  IFallMenuApi,
  IFallMenuState,
  IFallMenuProps
} from '@/types'

export const api = ['state', 'fall', 'arrowClick', 'mouseover', 'mouseout', 'overContent', 'reRender', 'left']

const initState = ({
  reactive,
  computed,
  api,
  props
}: {
  reactive: ISharedRenderlessFunctionParams<null>['reactive']
  computed: ISharedRenderlessFunctionParams<null>['computed']
  api: IFallMenuApi
  props: IFallMenuProps
}) => {
  const state = reactive({
    pager: 1,
    level2data: [],
    activeNode: null,
    isActive: props.value,
    pagerData: { data: [], offset: [], index: [] },
    left: computed(() => api.computeLeft()),
    data: computed(() => api.computeData())
  })

  return state
}

const initApi = ({
  api,
  state,
  fall,
  props,
  refs
}: {
  api: IFallMenuApi
  state: IFallMenuState
  fall: IFallMenuApi['fall']
  props: IFallMenuProps
  refs: ISharedRenderlessFunctionParams<null>['refs']
}) => {
  Object.assign(api, {
    fall,
    state,
    computePx: computePx({ props, refs, state }),
    mounted: mounted({ api }),
    computeLeft: computeLeft({ state }),
    beforeDestroy: beforeDestroy(api),
    computeData: computeData({ props }),
    arrowClick: arrowClick(state),
    overContent: overContent(state),
    mouseout: mouseout(state),
    mouseover: mouseover({ props, fall, state }),
    reRender: reRender({ api, state })
  })
}

export const renderless = (
  props: IFallMenuProps,
  { computed, reactive, onMounted, onBeforeUnmount, ref }: ISharedRenderlessFunctionParams,
  { refs }: ISharedRenderlessParamUtils
) => {
  const api: Partial<IFallMenuApi> = {}
  const fall = ref(null)
  const state = initState({ reactive, computed, api: api as IFallMenuApi, props })

  initApi({ api: api as IFallMenuApi, state, fall, props, refs })

  onMounted((api as IFallMenuApi).mounted)
  onBeforeUnmount((api as IFallMenuApi).beforeDestroy)

  return api
}
