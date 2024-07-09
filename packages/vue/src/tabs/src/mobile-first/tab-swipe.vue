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
import { $prefix, defineComponent } from '@opentiny/vue-common'
import emulate from '@opentiny/vue-renderless/common/deps/touch-emulator'
import CarouselItem from '@opentiny/vue-carousel-item'

emulate()

export default defineComponent({
  name: $prefix + 'TabSwipe',
  components: {
    TinyCarouselItem: CarouselItem
  },
  props: {
    stopThreshold: { type: Number, default: 10 }
  },
  data() {
    return { last: -1 }
  },
  methods: {
    onTouchstart(e: TouchEvent) {
      const clientX = e.touches[0].clientX
      this.last = clientX
    },
    onTouchmove(e: TouchEvent) {
      const { $refs, stopThreshold, last } = this
      const { touchContainer } = $refs
      const clientX = e.touches[0].clientX
      const change = clientX - last

      this.last = clientX

      if (touchContainer) {
        if (touchContainer.scrollWidth > touchContainer.clientWidth) {
          touchContainer.scrollLeft -= change
        }

        const shouldNext =
          change < 0 &&
          touchContainer.clientWidth + touchContainer.scrollLeft >= touchContainer.scrollWidth - stopThreshold
        const shouldPrevious = change > 0 && touchContainer.scrollLeft <= stopThreshold

        if (!shouldNext && !shouldPrevious) {
          e.stopPropagation()
        }
      }
    },
    clearScroll() {
      if (this.$refs.touchContainer) {
        this.$refs.touchContainer.scrollLeft = 0
      }
    }
  }
})
</script>
