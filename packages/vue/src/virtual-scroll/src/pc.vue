<template>
  <div
    class="tiny-virtual-scroll"
    ref="virtualScroll"
    @scroll="handleScroll"
    :style="
      direction === 'vertical'
        ? { 'height': `${visibleSize}px` }
        : { 'width': `${visibleSize}px`, whiteSpace: 'nowrap' }
    "
  >
    <div
      class="virtual-scroll-context"
      :style="direction === 'vertical' ? { 'height': `${state.totalSize}px` } : { 'width': `${state.totalSize}px` }"
    ></div>
    {{ console.log('总高度', state.totalSize) }}
    <div
      class="virtual-scroll-wrapper"
      :style="
        direction === 'vertical'
          ? { 'transform': `translate3d(0,${state.translate}px,0)`, flexDirection: 'column' }
          : {
              'transform': `translate3d(${state.translate}px,0,0)`,
              flexDirection: 'row',
              display: 'flex'
              // width: 'max-content'
            }
      "
    >
      <!-- 每项内容 -->
      <div
        class="virtual-scroll-item"
        ref="items"
        :style="direction === 'vertical' ? { 'height': `${itemSize}px` } : { 'width': `${itemSize}px ` }"
        v-for="(item, index) in state.visibleData"
        :key="item[itemIndex] || index"
      >
        <slot :item="item" />
      </div>
    </div>
  </div>
</template>

<script>
import { renderless, api } from '@opentiny/vue-renderless/virtual-scroll/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'

export default defineComponent({
  props: [
    ...props,
    'data',
    'itemSize',
    'itemIndex',
    'direction',
    'estimatedItemSize',
    'buffer',
    'prerender',
    'visibleSize'
  ],
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>
