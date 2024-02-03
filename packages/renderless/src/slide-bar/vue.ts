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

import { leftClick, rightClick, blockClick, changeState, changeSize, mouseEvent } from './index'

export const api = ['state', 'mouseEvent', 'rightClick', 'leftClick', 'blockClick']

export const renderless = (props, { onMounted, reactive }, { vm, parent, emit }) => {
  const api = {}
  const state = reactive({
    leftLength: 0,
    blockWidth: 0,
    blockMargin: 0,
    showLeft: false,
    showRight: false,
    blockWrapper: 0,
    wrapperWidth: 0,
    currentIndex: -1,
    offsetWidth: 0
  })

  Object.assign(api, {
    state,
    blockClick: blockClick({ emit, state }),
    changeState: changeState({ props, state }),
    changeSize: changeSize({ props, vm, state }),
    leftClick: leftClick({ api, props, vm, state }),
    mouseEvent: mouseEvent({ api, props, vm, state }),
    rightClick: rightClick({ api, parent, props, vm, state })
  })

  onMounted(api.changeSize)

  return api
}
