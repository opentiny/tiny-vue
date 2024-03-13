<template>
  <tiny-button>
    <img :src="image" width="26" />
    <span>图片按钮</span>
  </tiny-button>
</template>

<script>
import { Button } from '@opentiny/vue'

export default {
  components: {
    TinyButton: Button
  },
  data() {
    return {
      image: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/button-image.png`
    }
  }
}
</script>
