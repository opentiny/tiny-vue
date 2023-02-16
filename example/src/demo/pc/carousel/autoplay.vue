<template>
  <tiny-carousel height="150px" autoplay>
    <tiny-carousel-item
      class="carousel-item-demo"
      v-for="item in 4"
      :key="item"
    >
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
  }
}
</script>

<style scoped>
.carousel-item-demo:nth-child(2n) {
  background-color: #99a9bf;
}

.carousel-item-demo:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
