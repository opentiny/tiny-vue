/**
 * Copyright (c) 2022 - present TinyVue Authors.
 * Copyright (c) 2022 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICElinksMapNSES FOR MORE DETAILS.
 *
 */
import {
  IAnchorState,
  IAnchorProps,
  IAnchorApi,
  ISharedRenderlessParamHooks,
  ISharedRenderlessParamUtils
} from '@/types'

import {
  mounted,
  updated,
  unmounted,
  getContainer,
  linkClick,
  onItersectionObserver,
  setScrollContainer,
  getCurrentAnchor,
  setFixAnchor,
  handleScroll
} from './index'

export const api = [
  'state',
  'getContainer',
  'linkClick',
  'onItersectionObserver',
  'setScrollContainer',
  'getCurrentAnchor'
]

export const renderless = (
  props: IAnchorProps,
  { onMounted, onUnmounted, onUpdated, reactive, watch }: ISharedRenderlessParamHooks,
  { vm, emit, nextTick }: ISharedRenderlessParamUtils<never>
): IAnchorApi => {
  const api = {} as IAnchorApi
  const state: IAnchorState = reactive({
    currentLink: '',
    observerLinks: {},
    expandLink: {},
    intersectionObserver: null,
    scrollContainer: null,
    currentHash: '',
    isScroll: false,
    scrollTimer: 0,
    offsetTop: 0
  })

  Object.assign(api, {
    state,
    mounted: mounted({ state, api, props, nextTick }),
    updated: updated({ api }),
    unmounted: unmounted({ state, api }),
    getContainer: getContainer({ props }),
    linkClick: linkClick({ state, vm, emit, props, api }),
    onItersectionObserver: onItersectionObserver({ state, props, api, vm, emit }),
    setScrollContainer: setScrollContainer({ state, api }),
    getCurrentAnchor: getCurrentAnchor({ vm, state, emit }),
    setFixAnchor: setFixAnchor({ vm, props }),
    handleScroll: handleScroll(state)
  })

  onMounted(api.mounted)
  onUpdated(api.updated)
  onUnmounted(api.unmounted)

  watch(
    () => props.links,
    () => {
      api.mounted()
    }
  )

  watch(
    () => props.isAffix,
    () => {
      api.setFixAnchor()
    }
  )

  return api
}
