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

import { init } from '../common/deps/eSpaceCtrl'
import { getUserHref, doUserAction, initEspaceLink, openEspace } from './index'
import { testUID } from '../espace'
import type {
  IUserContactApi,
  IUserContactProps,
  IUserContactState,
  ISharedRenderlessParamHooks,
  IUserContactRenderlessParamUtils
} from '@/types'

export const api = ['show', 'getUserHref', 'doUserAction', 'initEspaceLink', 'openEspace', 'testUID']

export const renderless = (
  props: IUserContactProps,
  { reactive, ref }: ISharedRenderlessParamHooks,
  { service }: IUserContactRenderlessParamUtils
): IUserContactApi => {
  const api = {} as IUserContactApi
  const { setting = {} } = service || {}
  const { widgets = {} } = setting

  const eSpaceCtrlDisabled = widgets.ESpaceCtrl && !widgets.ESpaceCtrl.autoLink
  const eSpaceCtrl = eSpaceCtrlDisabled ? {} : init()

  const state: IUserContactState = reactive({
    initialized: false
  })

  Object.assign(api, {
    state,
    testUID,
    show: ref(false),
    getUserHref: getUserHref({ api, props }),
    initEspaceLink: initEspaceLink({ api, props, state, eSpaceCtrl, eSpaceCtrlDisabled }),
    doUserAction: doUserAction({ api, props, state, eSpaceCtrl }),
    openEspace: openEspace({ api, props, eSpaceCtrl })
  })

  return api
}
