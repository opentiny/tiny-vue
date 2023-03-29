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

import { init } from '@opentiny/vue-renderless/common/deps/eSpaceCtrl'
import { getUserHref, getUserTitle, doUserAction, initEspaceLink, openEspace, testUID, soundEspace } from './index'

export const api = ['getUserHref', 'getUserTitle', 'doUserAction', 'initEspaceLink', 'openEspace', 'testUID', 'soundEspace']

export const renderless = (props, { reactive }, { service }) => {
  const api = {}
  const { setting = {} } = service || {}
  const { widgets = {} } = setting

  const eSpaceCtrlDisabled = widgets.ESpaceCtrl && !widgets.ESpaceCtrl.autoLink
  const eSpaceCtrl = eSpaceCtrlDisabled ? {} : init()

  const state = reactive({
    initialized: false,
    dataItem: null
  })

  Object.assign(api, {
    state,
    testUID,
    getUserTitle,
    getUserHref: getUserHref({ api, props }),
    initEspaceLink: initEspaceLink({ api, props, state, eSpaceCtrl, eSpaceCtrlDisabled }),
    doUserAction: doUserAction({ api, props, state, eSpaceCtrl }),
    openEspace: openEspace({ api, state, eSpaceCtrl }),
    soundEspace: soundEspace({ api, state, eSpaceCtrl })
  })

  return api
}
