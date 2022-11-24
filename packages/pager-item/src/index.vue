<template>
  <div class="tiny-pager__group tiny-unselect">
    <ul class="tiny-pager__pages" @click="onPagerClick">
      <li
        :class="{ 'is-active': currentPage === 1 }"
        v-if="pageCount > 0"
        v-text="'1'"
      ></li>
      <li
        class="dot quickprev"
        v-if="state.showPrevMore"
        @mouseenter="onMouseenter('left')"
        @mouseleave="state.quickprevIconClass = popupIcon"
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
        class="dot quicknext"
        v-if="state.showNextMore"
        @mouseenter="onMouseenter('right')"
        @mouseleave="state.quicknextIconClass = popupIcon"
      >
        <component :is="state.quicknextIconClass" />
      </li>
      <li
        :class="{ 'is-active': pageCount === currentPage }"
        v-if="pageCount > 1"
        v-text="`${pageCount}`"
      ></li>
    </ul>
  </div>
</template>

<script>
import { setup, $prefix } from '@opentiny/vue-common'
import {
  renderless,
  api
} from '@opentiny/vue-renderless/pager-item/vue'
import { iconPopup, iconDoubleLeft, iconDoubleRight } from '@opentiny/vue-icon'

export default {
  name: $prefix + 'PagerItem',
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
      default: ()=> iconPopup()
    },
    doubleLeftIcon: {
      type: Object,
      default: ()=> iconDoubleLeft()
    },
    doubleRightIcon: {
      type: Object,
      default: ()=> iconDoubleRight()
    },
    isBeforePageChange: Boolean
  },
  setup(props, context) {
    return setup({ props, context, renderless, api, mono: true })
  }
}
</script>
