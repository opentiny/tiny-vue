<template>
  <div class="flex justify-around w-80">
    <tiny-image :image-size="100" :src="url" show-hover></tiny-image>
    <br />
    <tiny-image :image-size="100" round :src="url" show-hover></tiny-image>
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
      url: '/static/images/1.jpg'
    }
  }
}
</script>
