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
      url: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/mountain.png`
    }
  }
}
</script>
