<template>
  <div>
    <tiny-button text="图片裁剪" @click="visible = !visible"></tiny-button>
    <tiny-crop :cropvisible="visible" @update:cropvisible="visible = $event" :src="imgUrl" :view-mode="1"></tiny-crop>
  </div>
</template>

<script lang="jsx">
import { Button, Crop } from '@opentiny/vue'

export default {
  components: {
    TinyCrop: Crop,
    TinyButton: Button
  },
  data() {
    return {
      imgUrl: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/mountain.png`,
      visible: false
    }
  }
}
</script>
