<template>
  <div>
    <tiny-button text="图片裁剪" @click="visible = !visible"></tiny-button>
    <tiny-crop
      :cropvisible="visible"
      @update:cropvisible="visible = $event"
      :src="imgUrl"
      :min-crop-box-width="200"
      :min-crop-box-height="350"
      :min-container-height="300"
      :min-container-width="650"
    ></tiny-crop>
  </div>
</template>

<script lang="jsx">
import { TinyButton, TinyCrop } from '@opentiny/vue'

export default {
  components: {
    TinyCrop,
    TinyButton
  },
  data() {
    return {
      imgUrl: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/mountain.png`,
      visible: false
    }
  }
}
</script>
