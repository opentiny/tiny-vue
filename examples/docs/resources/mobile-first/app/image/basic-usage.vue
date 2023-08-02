<template>
  <div style="display: flex; justify-content: space-around; width: 300px">
    <tiny-image :image-size="100" :src="url"></tiny-image>
    <br />
    <tiny-image :image-size="100" round :src="url"></tiny-image>
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
