<template>
  <tiny-button size="medium">
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
      image: '/static/images/hae-logo.png'
    }
  }
}
</script>
