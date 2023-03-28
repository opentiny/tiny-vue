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

import { getRouteActive, onClick, bindChildren, routeTab } from './index'
import { xss } from '@opentiny/vue-renderless/common/xss.js'

export const api = ['state', 'onClick']

export const renderless = (props, { computed, onMounted, reactive }, { parent, emit, nextTick, route, router }) => {
  const api = {}
  const state = reactive({
    active: false,
    info: computed(() => (props.dot ? '' : !props.dot && props.badge)),
    url: computed(() => xss.filterUrl(props.url)),
    routeActive: computed(() => api.getRouteActive()),
    renderActive: computed(() => (parent.$parent.route ? state.routeActive : state.active)),
    renderColor: computed(() => parent.$parent[state.active ? 'activeColor' : 'inactiveColor'])
  })

  Object.assign(api, {
    state,
    bindChildren: bindChildren(parent),
    routeTab: routeTab(props, state),
    getRouteActive: getRouteActive({ props, route }),
    onClick: onClick({ api, emit, parent, props, router, state })
  })

  onMounted(() => nextTick(api.bindChildren))

  return api
}
