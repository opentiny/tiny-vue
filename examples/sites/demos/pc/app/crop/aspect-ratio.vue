<template>
  <div>
    <tiny-button text="图片裁剪" @click="visible = !visible"></tiny-button>
    <tiny-crop
      :cropvisible="visible"
      @update:cropvisible="visible = $event"
      :src="imgUrl"
      :aspect-ratio="7 / 5"
      :center="true"
      :quality="0.5"
      max-size="300KB"
      @setAspectRatio="setAspectRatio"
    ></tiny-crop>
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
      visible: false,
      imgUrl: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/mountain.png`
    }
  },
  methods: {
    setAspectRatio(aspectRatio) {
      Modal.message({
        message: `宽高比数据: ${JSON.stringify(aspectRatio)}`,
        status: 'info'
      })
    }
  }
}
</script>
