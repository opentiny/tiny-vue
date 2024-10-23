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
import { $prefix, $props, $setup, defineComponent } from '@opentiny/vue-common'
import template from 'virtual-template?pc|mobile-first'

const $constants = {
  PIC_PREVIEW_OPTIONS: {
    zIndex: Number.POSITIVE_INFINITY,
    urlList: null
  },
  EDITOR_FULLSCREEN_OPTIONS: Number.POSITIVE_INFINITY
}

export const fluentEditorProps = {
  ...$props,
  _constants: {
    type: Object,
    default: () => $constants
  },
  content: String,
  disabled: {
    type: Boolean,
    default: false
  },
  fileUpload: Object,
  globalOptions: {
    type: Object,
    required: false,
    default: () => ({})
  },
  imageUpload: Object,
  mentionObj: {
    type: Object,
    required: false,
    default: () => ({})
  },
  modelValue: String,
  options: {
    type: Object,
    required: false,
    default: () => ({})
  },
  picPreview: [Object, Boolean],
  dataType: {
    type: Boolean,
    default: true
  },
  dataUpgrade: {
    type: Boolean,
    default: true
  },
  zIndex: {
    type: Number,
    default: $constants.EDITOR_FULLSCREEN_OPTIONS
  },
  imagePasteFailCallback: {
    type: Function,
    default: () => {}
  }
}

export default defineComponent({
  name: $prefix + 'FluentEditor',
  props: fluentEditorProps,
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
