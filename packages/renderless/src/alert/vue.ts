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

import type{ IAlertApi, IAlertProps, IAlertState, ISharedRenderlessParamHooks, IAlertRenderlessParamUtils } from '@/types'
import {
  computedGetIcon,
  computedGetTitle,
  computedStyle,
  computedClass,
  handleClose,
  handleHeaderClick,
  watchAutoHide,
  handlerTargetNode
} from './index'

export const api = ['handleClose', 'state', 'handleHeaderClick']

const initState = ({ api, computed, constants, reactive }): IAlertState => {
  return reactive({
    show: true,
    contentVisible: false,
    contentDescribeHeight: 0,
    contentDefaultHeight: 0,
    contentMaxHeight: constants.CONTENT_MAXHEUGHT,
    scrollStatus: false,
    getIcon: computed(() => api.computedGetIcon()),
    getTitle: computed(() => api.computedGetTitle()),
    alertClass: computed(() => api.computedClass()),
    alertStyle: computed(() => api.computedStyle())
  })
}

const initApi = ({ api, state, constants, props, designConfig, t, emit, vm, parent, nextTick, mode }): void => {
  Object.assign(api, {
    state,
    computedGetIcon: computedGetIcon({ constants, props, designConfig }),
    computedGetTitle: computedGetTitle({ constants, props, t }),
    computedClass: computedClass({ props, mode }),
    computedStyle: computedStyle({ props, mode }),
    handleClose: handleClose({ emit, state }),
    handleHeaderClick: handleHeaderClick({ state, props, vm }),
    watchAutoHide: watchAutoHide({ api, props }),
    handlerTargetNode: handlerTargetNode({ props, parent, vm, nextTick })
  })
}

const initWatcher = ({ watch, props, api }) => {
  watch(() => props.autoHide, api.watchAutoHide, { immediate: true })
  watch(() => props.target, api.handlerTargetNode, { immediate: true })
}

export const renderless = (
  props: IAlertProps,
  { computed, reactive, watch }: ISharedRenderlessParamHooks,
  { t, emit, constants, vm, designConfig, parent, nextTick, mode }: IAlertRenderlessParamUtils
): IAlertApi => {
  const api = {} as IAlertApi
  const state: IAlertState = initState({ api, computed, constants, reactive })
  initApi({ api, state, constants, props, designConfig, t, emit, vm, parent, nextTick, mode })
  initWatcher({ watch, props, api })

  return api
}
