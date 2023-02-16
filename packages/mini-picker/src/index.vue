<!--
 * Copyright (c) 2022 - present TinyVue Authors.
 * Copyright (c) 2022 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 -->
<template>
  <div class="tiny-mobile-mini-picker" v-show="visible" @click="visibleHandle">
    <div class="tiny-mobile-mini-picker__mask"></div>
    <div :class="['tiny-mobile-mini-picker__content', state.toggle ? 'is-toggle' : '']">
      <div class="tiny-mobile-mini-picker__toolbar">
        <slot name="toolbar">
          <div class="picker_action picker_cancel" @click="cancel">
            {{ cancelButtonText }}
          </div>
          <div class="picker_action picker_title">{{ title }}</div>
          <div class="picker_action picker_confirm" @click="confirm">
            {{ confirmButtonText }}
          </div>
        </slot>
      </div>
      <div class="tiny-mobile-mini-picker__columns" :style="{ height: state.clumnsWrapHeight + 'px' }">
        <picker-column
          :columns-item="item"
          v-for="(item, index) in state.formattedColumns"
          :ref="'childrenPicker' + index"
          :key="index"
          :default-index="item.defaultIndex || +state.defaultIndex"
          :item-height="itemHeight"
          :swipe-duration="swipeDuration"
          :value-key="valueKey"
          @change="change(index)"
          :visible-item-count="visibleItemCount"
        ></picker-column>
      </div>
    </div>
  </div>
</template>

<script>
import { t } from '@opentiny/vue-locale'
import { renderless, api } from '@opentiny/vue-renderless/mini-picker/vue'
import { $prefix, setup } from '@opentiny/vue-common'
import PickerColumn from '@opentiny/vue-picker-column'

const $constants = {
  CHILDREN_PICKER: 'childrenPicker'
}

export default {
  name: $prefix + 'MiniPicker',
  components: {
    PickerColumn
  },
  props: {
    _constants: {
      type: Object,
      default: () => $constants
    },
    columns: {
      type: Array,
      default: () => []
    },
    visible: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    confirmButtonText: {
      type: String,
      default: () => t('ui.miniPicker.confirm')
    },
    cancelButtonText: {
      type: String,
      default: () => t('ui.miniPicker.cancel')
    },
    defaultIndex: {
      type: Number,
      default: 0
    },
    valueKey: {
      type: String,
      default: 'text'
    },
    itemHeight: {
      type: Number,
      default: 34
    },
    visibleItemCount: {
      type: Number,
      default: 5
    },
    swipeDuration: {
      type: Number,
      default: 1000
    }
  },
  setup(props, context) {
    return setup({ props, context, renderless, api, mono: true })
  }
}
</script>
