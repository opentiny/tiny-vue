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

export const queryChange =
  ({ select, state, vm }) =>
  () => {
    state.visible = true

    if (Array.isArray(select.state.options)) {
      const groupOptions = select.state.options.filter(
        (option) => option.state.parent && vm && option.state.parent.label === vm.label
      )

      if (Array.isArray(groupOptions)) {
        state.visible = groupOptions.some((option) => option.visible === true)
      }
    }
  }
