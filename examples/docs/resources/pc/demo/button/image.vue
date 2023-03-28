<template>
  <tiny-button>
    <img :src="image" width="26" />
    <span>图片按钮</span>
  </tiny-button>
</template>

<script lang="jsx">
import { Button } from '@opentiny/vue'

export default {
  components: {
    TinyButton: Button
  },
  data() {
    return {
      image: 'static/images/button-image.png'
    }
  }
}
</script>
