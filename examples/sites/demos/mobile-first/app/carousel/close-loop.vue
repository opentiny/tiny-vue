<template>
  <div class="w-80">
    <tiny-carousel aspect-ratio="2:1" :loop="false">
      <tiny-carousel-item class="">
        <img :src="img1" alt="" />
      </tiny-carousel-item>
      <tiny-carousel-item class="">
        <img :src="img2" alt="" />
      </tiny-carousel-item>
      <tiny-carousel-item class="">
        <img :src="img3" alt="" />
      </tiny-carousel-item>
      <tiny-carousel-item class="">
        <img :src="img4" alt="" />
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
  },
  data() {
    return {
      img1: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/dsj.png`,
      img2: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/jz.png`,
      img3: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/ld.png`,
      img4: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/px.png`
    }
  }
}
</script>
