<template>
  <div class="w-80">
    <tiny-carousel aspect-ratio="2:1" :loop="false">
      <tiny-carousel-item class="">
        <img src="webnova/static/images/dsj.png" alt="" />
      </tiny-carousel-item>
      <tiny-carousel-item class="">
        <img src="webnova/static/images/jz.png" alt="" />
      </tiny-carousel-item>
      <tiny-carousel-item class="">
        <img src="webnova/static/images/ld.png" alt="" />
      </tiny-carousel-item>
      <tiny-carousel-item class="">
        <img src="webnova/static/images/px.png" alt="" />
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
