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
import type { PropType } from '@opentiny/vue-common'
import { $props, $prefix, $setup, defineComponent } from '@opentiny/vue-common'
import template from 'virtual-template?pc|mobile|mobile-first'

export const $constants = {
  INPUT_PC: 'tiny-input__',
  INPUTGROUP_PC: 'tiny-input-group__',
  INPUT_MOBILE: 'tiny-mobile-input__',
  INPUTGROUP_MOBILE: 'tiny-mobile-input-group__',
  Mode: 'pc',
  inputMode(mode) {
    return mode === this.Mode ? this.INPUT_PC : this.INPUT_MOBILE
  },
  inputGroupMode(mode) {
    return mode === this.Mode ? this.INPUTGROUP_PC : this.INPUTGROUP_MOBILE
  },
  VALIDATE_ICON: {
    Validating: 'tiny-icon-loading',
    Success: 'tiny-icon-circle-check',
    Error: 'tiny-icon-circle-close'
  },
  COMPONENT_NAME: {
    FormItem: 'FormItem'
  },
  MASKSYMBOL: '******'
}

export const inputProps = {
  ...$props,
  _constants: {
    type: Object,
    default: () => $constants
  },
  name: String,
  size: String,
  form: String,
  label: String,
  height: Number,
  resize: String,
  tabindex: { type: String, default: '1' },
  disabled: Boolean,
  readonly: Boolean,
  hoverExpand: Boolean,
  mask: Boolean,
  suffixIcon: [Object, String],
  prefixIcon: [Object, String],
  modelValue: [String, Number] as PropType<string | number | null>,
  type: {
    type: String,
    default: 'text'
  },
  vertical: {
    type: Boolean,
    default: false
  },
  selectMenu: {
    type: Array<{ id: string; label: string }>,
    default: () => []
  },
  ellipsis: {
    type: Boolean,
    default: false
  },
  contentStyle: {
    type: Object,
    default: () => ({})
  },
  isSelect: {
    type: Boolean,
    default: false
  },
  mobileTips: String,
  counter: {
    type: Boolean,
    default: false
  },
  autosize: {
    type: [Boolean, Object],
    default: false
  },
  clearable: {
    type: Boolean,
    default: false
  },
  autocomplete: {
    type: String,
    default: 'off'
  },
  showPassword: {
    type: Boolean,
    default: false
  },
  showWordLimit: {
    type: Boolean,
    default: false
  },
  showTitle: {
    type: Boolean,
    default: false
  },
  validateEvent: {
    type: Boolean,
    default: true
  },
  // mobile特有属性
  textareaTitle: {
    type: String,
    default: '标题'
  },
  displayOnly: {
    type: Boolean,
    default: false
  },
  displayOnlyContent: {
    type: String,
    default: ''
  },
  customClass: {
    type: String,
    default: ''
  },
  frontClearIcon: {
    type: Boolean,
    default: false
  },
  showEmptyValue: {
    type: Boolean,
    default: false
  }
}

export default defineComponent({
  name: $prefix + 'Input',
  inheritAttrs: false,
  props: inputProps,
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
