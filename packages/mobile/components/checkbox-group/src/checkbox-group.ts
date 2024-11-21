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
export const $constants = {
  FORM_ITEM: 'FormItem',
  FORM_CHANGE: 'form.change'
}

export const CheckboxGroupProps = {
  _constants: {
    type: Object,
    default: () => $constants
  },
  modelValue: {},
  disabled: Boolean,
  min: Number,
  max: Number,
  size: String,
  fill: String,
  textColor: String,
  vertical: Boolean,
  options: {
    type: Array,
    default: () => []
  },
  type: {
    type: String,
    default: 'checkbox'
  },
  displayOnly: {
    type: Boolean,
    default: false
  },
  iconPosition: String as PropType<IconPosition>,
  shape: {
    type: String,
    default: ''
  }
}
