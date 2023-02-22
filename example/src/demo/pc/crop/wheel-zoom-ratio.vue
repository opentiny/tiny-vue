<template>
  <div>
    <tiny-button text="图片裁剪" @click="visible = !visible"></tiny-button>
    <tiny-crop :cropvisible="visible" @update:cropvisible="visible = $event" src="static/images/1.jpg" :wheel-zoom-ratio="0.5"></tiny-crop>
  </div>
</template>

<script>
import { Button, Crop } from '@opentiny/vue'

export default {
  components: {
    TinyCrop: Crop,
    TinyButton: Button
  },
  data() {
    return {
      visible: false
    }
  }
}
</script>
