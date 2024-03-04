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
  <div class="tiny-mobile-action-sheet" v-show="visible" @click="hide">
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
            item[valueField] === modelValue ? 'is-active' : ''
          ]"
          :style="state.contentStyle"
          v-for="(item, index) in menus"
          :key="index"
          @click="selectOption(item, index)"
        >
          <slot name="item" :item="item">
            {{ item[textField] }}
          </slot>
        </div>
      </div>
    </div>
    <div class="tiny-mobile-action-sheet__action" v-if="contentPosition">
      <slot name="action">
        <div class="tiny-mobile-action-sheet__cancel" @click="hide">
          {{ t('ui.actionSheet.cancel') }}
        </div>
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/action-sheet/vue'
import { $prefix, setup, defineComponent, props } from '@opentiny/vue-common'
import '@opentiny/vue-theme-mobile/action-sheet/index.less'
import BScroll from '@better-scroll/core'

export default defineComponent({
  name: $prefix + 'ActionSheet',
  props: [
    ...props,
    'menus',
    'modelValue',
    'visible',
    'ellipsis',
    'contentPosition',
    'contentStyle',
    'height',
    'valueField',
    'textField',
    'contentClass'
  ],
  setup(props, context) {
    return setup({ props, context, renderless, api, extendOptions: { BScroll } })
  }
})
</script>
