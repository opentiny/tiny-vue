<template>
  <tiny-image style="width: 100px; height: 100px" :src="url"></tiny-image>
</template>

<script lang="jsx">
import { Image } from '@opentiny/vue'

export default {
  components: {
    TinyImage: Image
  },
  data() {
    return {
      url: '/static/images/mountain.png'
    }
  }
}
</script>
