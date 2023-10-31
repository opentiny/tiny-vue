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
import { $props, $prefix, $setup, defineComponent } from '@opentiny/vue-common'
import template from 'virtual-template?pc|mobile|mobile-first'

const $constants = {
  MODE: {
    CONTAIN: {
      name: 'contain',
      icon: 'icon-fullscreen'
    },
    ORIGINAL: {
      name: 'original',
      icon: 'icon-minscreen'
    }
  },
  DEFAULT_POPPER_ZINDEX: Number.POSITIVE_INFINITY,
  THUMBNAILTOP: 8,
  MENUTOP: 10
}

export default defineComponent({
  name: $prefix + 'ImageViewer',
  props: {
    ...$props,
    _constants: {
      type: Object,
      default: () => $constants
    },
    urlList: {
      type: Array,
      default: () => []
    },
    zIndex: {
      type: Number,
      default: $constants.DEFAULT_POPPER_ZINDEX
    },
    previewVisible: {
      type: Boolean,
      default: false
    },
    closeShow: {
      type: Boolean,
      default: false
    },
    arrowShow: {
      type: Boolean,
      default: false
    },
    toolShow: {
      type: Boolean,
      default: false
    },
    showIndex: {
      type: Boolean,
      default: false
    },
    imageFullCurrent: {
      type: Boolean,
      default: false
    },
    startPosition: {
      type: Number,
      default: 0
    },
    asyncClose: {
      type: Boolean,
      default: false
    },
    deleteButton: {
      type: Boolean,
      default: false
    },
    onSwitch: {
      type: Function,
      default: () => {
        // do nothing
      }
    },
    onClose: {
      type: Function,
      default: () => {
        // do nothing
      }
    },
    isThumbnail: {
      type: Boolean,
      default: false
    },
    isMenuView: {
      type: Boolean,
      default: false
    },
    modalView: {
      type: Boolean,
      default: false
    },
    modalHeight: {
      type: [String, Number],
      default: 400
    },
    bgColor: {
      type: String,
      default: 'bg-color-icon-primary'
    }
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
