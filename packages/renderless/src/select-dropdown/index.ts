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

export const mounted =
  ({ selectEmitter, constants, state, selectVm, updatePopper, destroyPopper, parent }) =>
  () => {
    selectEmitter.on(constants.EVENT_NAME.updatePopper, (keepZIndex) => {
      let hideDrop = false

      if (!state.referenceElm || state.referenceElm.nodeType !== 1) {
        // 触发源如果是用户传递的插槽，则赋值为外侧div
        state.referenceElm = selectVm.$refs.reference ? selectVm.$refs.reference.$el : selectVm.$refs.select
        selectVm.popperElm = selectVm.state.popperElm = state.popperElm = parent.$el
      }

      if (parent.select.state.visible && !hideDrop) {
        updatePopper(keepZIndex)
        hideDrop = true
      }
    })

    selectEmitter.on(constants.EVENT_NAME.destroyPopper, destroyPopper)
  }
