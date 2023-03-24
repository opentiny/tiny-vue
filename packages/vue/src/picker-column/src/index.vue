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
  <div class="tiny-mobile-picker-column">
    <div class="tiny-mobile-picker-column__mask" :style="state.maskStyle"></div>
    <div class="tiny-mobile-picker-column__indicator" :style="{ height: itemHeight + 'px' }"></div>
    <ul class="tiny-mobile-picker-column__wrapper" ref="track" :style="state.wrapperStyle" @click="onClickItem(1)">
      <li
        :class="{
          'tiny-mobile-picker-column__item': true,
          'is-select': index === state.currentIndex
        }"
        v-for="(item, index) in state.columnsItem.values"
        :key="index"
        @click.stop="onClickItem(index)"
        :style="{ height: itemHeight + 'px', lineHeight: itemHeight + 'px' }"
        @transitionend="onTransitionEnd"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script lang="tsx">
import { renderless, api } from '@opentiny/vue-renderless/picker-column/vue'
import { $prefix, setup, defineComponent } from '@opentiny/vue-common'

export default defineComponent({
  name: $prefix + 'PickerColumn',
  emits: ['change'],
  props: {
    columnsItem: {
      type: Object,
      default: () => ({})
    },
    defaultIndex: Number,
    itemHeight: Number,
    visibleItemCount: Number,
    swipeDuration: Number,
    valueKey: String
  },
  setup(props, context) {
    return setup({ props, context, renderless, api, mono: true })
  }
})
</script>
