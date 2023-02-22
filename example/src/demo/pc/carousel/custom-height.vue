<template>
  <div>
    <tiny-carousel type="card" height="150px">
      <tiny-carousel-item class="carousel-item-demo" v-for="item in 4" :key="item">
        <h3>{{ item }}</h3>
      </tiny-carousel-item>
    </tiny-carousel>
    <br />
    <tiny-carousel type="card" height="200px">
      <tiny-carousel-item class="carousel-item-demo" v-for="item in 4" :key="item">
        <h3>{{ item }}</h3>
      </tiny-carousel-item>
    </tiny-carousel>
  </div>
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
.block {
  margin: 20px 0;
}

.carousel-item-demo:nth-child(2n) {
  background-color: #f7f7f9;
}

.carousel-item-demo:nth-child(2n + 1) {
  background-color: #f7f7f9;
}
</style>
