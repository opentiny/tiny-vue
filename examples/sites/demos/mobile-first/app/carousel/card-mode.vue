<template>
  <tiny-carousel height="150px" type="card">
    <tiny-carousel-item class="carousel-item-demo" v-for="item in 4" :key="item">
      <h3>{{ item }}</h3>
    </tiny-carousel-item>
  </tiny-carousel>
</template>

<script lang="jsx">
import { TinyCarousel, TinyCarouselItem } from '@opentiny/vue'

export default {
  components: {
    TinyCarousel,
    TinyCarouselItem
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
