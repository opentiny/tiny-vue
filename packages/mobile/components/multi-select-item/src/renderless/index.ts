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

export const handleClick =
  ({ props, multiSelect }) =>
  (event) => {
    if (props.option.disabled) {
      return
    }

    event.stopPropagation()
    if (props.disabled !== true && multiSelect.disabled !== true) {
      multiSelect.state.multiSelectEmitter.emit('multiSelectItemClick', props.option)
    }
  }

export const toggleExpand =
  ({ props, multiSelect }) =>
  (event) => {
    if (props.option.disabled) {
      return
    }

    event.stopPropagation()
    if (props.disabled !== true && multiSelect.disabled !== true) {
      multiSelect.state.multiSelectEmitter.emit('toggleItemExpand', props.option)
    }
  }
