<template>
  <tiny-carousel-item data-tag="tiny-tab-swipe" class="w-full !h-fit">
    <div
      ref="touchContainer"
      data-tiny-touch-simulate-container
      class="w-full overflow-auto scrollbar-size-0"
      @touchstart.passive="onTouchstart"
      @touchmove.passive="onTouchmove"
    >
      <slot></slot>
    </div>
  </tiny-carousel-item>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/tabs-mf/vue-swipe'
import { $prefix, $props, defineComponent, setup } from '@opentiny/vue-common'
import CarouselItem from '@opentiny/vue-carousel-item'

export default defineComponent({
  name: $prefix + 'TabSwipe',
  components: {
    TinyCarouselItem: CarouselItem
  },
  props: {
    ...$props,
    stopThreshold: { type: Number, default: 10 }
  },
  setup(props: any, context: any) {
    return setup({ props, context, renderless, api, mono: true })
  }
})
</script>
