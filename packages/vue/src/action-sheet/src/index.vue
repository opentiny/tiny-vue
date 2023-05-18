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
  <div class="tiny-mobile-action-sheet" v-show="visible" @click="visibleHandle">
    <div class="tiny-mobile-action-sheet__mask" :style="state.sheetMaskStyle" v-if="!contentPosition"></div>
    <div
      :class="[
        'tiny-mobile-action-sheet__content',
        state.toggle ? 'is-toggle' : '',
        contentPosition ? '' : 'is-not-content'
      ]"
      :style="[state.sheetContentStyle]"
      ref="scrollMenu"
    >
      <div :class="['tiny-mobile-action-sheet__menu', ellipsis ? 'is-ellipsis' : '']">
        <div
          :class="[
            'tiny-mobile-action-sheet__item',
            item.warn ? 'is-warn' : '',
            item.id === modelValue || item.id === state.active ? 'is-active' : ''
          ]"
          v-for="(item, index) in menus"
          :key="index"
          @click="menuHandle(item, index)"
        >
          <slot name="item" :item="item">
            {{ item.label }}
          </slot>
        </div>
      </div>
    </div>
    <div class="tiny-mobile-action-sheet__action" v-if="contentPosition">
      <slot name="action">
        <div class="tiny-mobile-action-sheet__cancel" @click="visibleHandle">
          {{ t('ui.actionSheet.cancel') }}
        </div>
      </slot>
    </div>
  </div>
</template>

<script lang="tsx">
import { renderless, api } from '@opentiny/vue-renderless/action-sheet/vue'
import { $prefix, setup, defineComponent } from '@opentiny/vue-common'
import '@opentiny/vue-theme-mobile/action-sheet/index.less'
import BScroll from '@better-scroll/core'

export default defineComponent({
  name: $prefix + 'ActionSheet',
  props: {
    menus: {
      type: Array,
      default: () => []
    },
    modelValue: [Number, String],
    visible: {
      type: Boolean,
      default: false
    },
    ellipsis: {
      type: Boolean,
      default: false
    },
    height: {
      type: String,
      default: '200px'
    },
    contentPosition: {
      type: Boolean,
      default: false
    }
  },
  setup(props, context) {
    return setup({ props, context, renderless, api, mono: true, extendOptions: { BScroll } })
  }
})
</script>
