<template>
  <tiny-carousel height="150px" arrow="always">
    <tiny-carousel-item class="carousel-item-demo" v-for="item in 4" :key="item">
      <h3>{{ item }}</h3>
    </tiny-carousel-item>
  </tiny-carousel>
</template>

<script setup lang="jsx">
import { Carousel as TinyCarousel, CarouselItem as TinyCarouselItem } from '@opentiny/vue'
</script>

<style scoped>
.carousel-item-demo:nth-child(2n) {
  background-color: #fafafa;
}

.carousel-item-demo:nth-child(2n + 1) {
  background-color: #edf0f3;
}
</style>
