<template>
  <div style="overflow: hidden">
    <div class="float-left ml-10" v-for="fit in fits" :key="fit">
      <div class="text-center">{{ fit }}</div>
      <tiny-image :image-size="100" :src="url" :fit="fit"></tiny-image>
    </div>
  </div>
</template>

<script>
import { Image } from '@opentiny/vue'

export default {
  components: {
    TinyImage: Image
  },
  data() {
    return {
      fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
      url: '/static/images/1.jpg'
    }
  }
}
</script>
