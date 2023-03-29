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

export const handleClose = ({ emit, props }) => (event) => {
  event.stopPropagation()

  const close = () => emit('close', event)
  props.beforeDelete ? props.beforeDelete(close) : close()
}

export const handleClick = ({ emit, parent }) => (event) => {
  parent.$parent && parent.$parent.tagSelectable && event.stopPropagation()
  emit('click', event)
}
