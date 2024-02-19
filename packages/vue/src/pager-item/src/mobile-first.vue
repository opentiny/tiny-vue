<template>
  <div :class="gcls('pager-group')">
    <ul class="inline-flex text-xs" @click="onPagerClick">
      <li
        :class="m(gcls('li'), gcls('li-hover'), gcls({ 'is-active': currentPage === 1 }))"
        v-if="pageCount > 0"
        v-text="'1'"
      ></li>
      <li
        :class="m(gcls('li'), gcls('dot'))"
        v-if="state.showPrevMore"
        @mouseenter="onMouseenter('left')"
        @mouseleave="state.quickprevIconClass = popupIcon"
      >
        <component :class="gcls('quick-icon')" :is="state.quickprevIconClass" />
      </li>
      <li
        v-for="pager in state.pagers"
        :key="pager"
        :class="m(gcls('li'), gcls('li-hover'), gcls({ 'is-active': currentPage === pager }))"
        v-text="`${pager}`"
      ></li>
      <li
        :class="m(gcls('li'), gcls('dot'))"
        v-if="state.showNextMore"
        @mouseenter="onMouseenter('right')"
        @mouseleave="state.quicknextIconClass = popupIcon"
      >
        <component :class="gcls('quick-icon')" :is="state.quicknextIconClass" />
      </li>
      <li
        class="hover:text-color-brand-hover"
        :class="m(gcls('li'), gcls({ 'is-active': pageCount === currentPage }))"
        v-if="pageCount > 1"
        v-text="`${pageCount}`"
      ></li>
    </ul>
  </div>
</template>

<script lang="ts">
import { setup, props, defineComponent } from '@opentiny/vue-common'
import { renderless, api } from '@opentiny/vue-renderless/pager-item/vue'
import { IconPopup, IconDoubleLeft, IconDoubleRight } from '@opentiny/vue-icon'
import { classes } from './token'

export default defineComponent({
  inheritAttrs: false,
  emits: ['click'],
  components: {
    IconPopup: IconPopup(),
    IconDoubleLeft: IconDoubleLeft(),
    IconDoubleRight: IconDoubleRight()
  },
  props: [
    ...props,
    'disabled',
    'currentPage',
    'pageCount',
    'pagerCount',
    'popupIcon',
    'doubleLeftIcon',
    'doubleRightIcon',
    'isBeforePageChange'
  ],
  setup(props: any, context: any): any {
    return setup({ props, context, renderless, api, classes })
  }
})
</script>
