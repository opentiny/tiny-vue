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
  <div class="tiny-pager__group tiny-unselect">
    <ul class="tiny-pager__pages" @click="onPagerClick">
      <li :class="{ 'is-active': currentPage === 1 }" v-if="pageCount > 0" v-text="'1'"></li>
      <li
        ref="prev"
        class="dot quickprev"
        v-if="state.showPrevMore"
        @mouseenter="onMouseenter('left')"
        @mouseleave="state.quickprevIconClass = popupIcon"
        :class="[state.quickprevIconClass === popupIcon && 'is-popup']"
      >
        <component :is="state.quickprevIconClass" />
      </li>
      <li
        v-for="pager in state.pagers"
        :key="pager"
        :class="{ 'is-active': currentPage === pager }"
        v-text="`${pager}`"
      ></li>
      <li
        ref="next"
        class="dot quicknext"
        v-if="state.showNextMore"
        @mouseenter="onMouseenter('right')"
        @mouseleave="state.quicknextIconClass = popupIcon"
        :class="[state.quicknextIconClass === popupIcon && 'is-popup']"
      >
        <component :is="state.quicknextIconClass" />
      </li>
      <li :class="{ 'is-active': pageCount === currentPage }" v-if="pageCount > 1" v-text="`${pageCount}`"></li>
    </ul>
  </div>
</template>

<script lang="ts">
import { setup, $prefix, defineComponent } from '@opentiny/vue-common'
import { renderless, api } from '@opentiny/vue-renderless/pager-item/vue'
import { iconPopup, iconDoubleLeft, iconDoubleRight } from '@opentiny/vue-icon'

export default defineComponent({
  name: $prefix + 'PagerItem',
  emits: ['click', 'change'],
  components: {
    IconPopup: iconPopup(),
    IconDoubleLeft: iconDoubleLeft(),
    IconDoubleRight: iconDoubleRight()
  },
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    currentPage: Number,
    pageCount: Number,
    pagerCount: Number,
    popupIcon: {
      type: Object,
      default: () => iconPopup()
    },
    doubleLeftIcon: {
      type: Object,
      default: () => iconDoubleLeft()
    },
    doubleRightIcon: {
      type: Object,
      default: () => iconDoubleRight()
    },
    isBeforePageChange: Boolean
  },
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>
