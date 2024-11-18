<template>
  <tiny-button size="medium">
    <img :src="image" width="26" />
    <span>图片按钮</span>
  </tiny-button>
</template>

<script>
import { TinyButton } from '@opentiny/vue'

export default {
  components: {
    TinyButton
  },
  data() {
    return {
      image: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/hae-logo.png`
    }
  }
}
</script>
