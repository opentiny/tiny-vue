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
import { $props, $prefix, $setup } from '@opentiny/vue-common'
import PCTemplate from './pc'
import MobileTemplate from './mobile'

const $constants = {
  TAB_ITEM: 'TabItem'
}

const template = (mode) => {
  if (process.env.TINY_MODE === 'pc') return PCTemplate
  else if (process.env.TINY_MODE === 'mobile') return MobileTemplate
  else return mode === 'mobile' ? MobileTemplate : PCTemplate
}

export default {
  name: $prefix + 'Tabs',
  props: {
    ...$props,
    _constants: {
      type: Object,
      default: () => $constants
    },
    tabStyle: String,
    activeName: String,
    withClose: Boolean,
    withAdd: Boolean,
    size: String,
    activeColor: {
      type: String,
      default: ''
    },
    modelValue: {},
    editable: Boolean,
    position: {
      type: String,
      default: 'top'
    },
    beforeLeave: Function,
    stretch: Boolean,
    showMoreTabs: Boolean,
    swipeable: {
      type: Boolean,
      default: true
    },
    popperClass: String,
    popperAppendToBody: {
      type: Boolean,
      default: true
    },
    dropConfig: {
      type: Object,
      default: () => null
    }
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
}
