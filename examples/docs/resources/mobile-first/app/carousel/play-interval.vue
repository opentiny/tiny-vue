<template>
  <tiny-carousel height="150px" :interval="1000" autoplay>
    <tiny-carousel-item :class="bgColor[item - 1]" v-for="item in 4" :key="item">
      <h3>{{ item }}</h3>
    </tiny-carousel-item>
  </tiny-carousel>
</template>

<script>
import { Carousel, CarouselItem } from '@opentiny/vue'

export default {
  components: {
    TinyCarousel: Carousel,
    TinyCarouselItem: CarouselItem
  },
  data() {
    return {
      bgColor: [
        'bg-color-info-primary-subtle',
        'bg-color-success-subtle',
        'bg-color-icon-primary',
        'bg-color-warning-subtle'
      ]
    }
  }
}
</script>
