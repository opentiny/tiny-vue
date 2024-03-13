<template>
  <tiny-image :src="url"></tiny-image>
</template>

<script>
import { Image } from '@opentiny/vue'

export default {
  components: {
    TinyImage: Image
  },
  data() {
    return {
      url: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/1.jpg`
    }
  }
}
</script>
