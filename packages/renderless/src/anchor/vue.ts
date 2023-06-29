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

import { mounted, updated, unmounted, getContainer, linkClick, onItersectionObserver } from './index'

export const api = ['state', 'getContainer', 'linkClick', 'onItersectionObserver']

export const renderless = (props, { onMounted, onUnmounted, onUpdated, reactive }, { vm, emit }) => {
  const api = {}
  const state = reactive({
    currentLink: '',
    observerLinks: {},
    expandLink: {},
    intersectionObserver: null,
    scrollContainer: null,
    currentHash: '',
    isScroll: false,
    scrollTimer: null,
    offsetTop: 0
  })

  Object.assign(api, {
    state,
    mounted: mounted({ vm, state, api, props }),
    updated: updated({ state, api }),
    unmounted: unmounted({ state }),
    getContainer: getContainer({ props }),
    linkClick: linkClick({ state, vm, emit, props }),
    onItersectionObserver: onItersectionObserver({ vm, state, props, emit })
  })

  onMounted(api.mounted)
  onUpdated(api.updated)
  onUnmounted(api.unmounted)

  return api
}
