<template>
  <div>
    <tiny-button @click="replaceHandle" style="margin-bottom: 20px"
      >替换图片</tiny-button
    >
    <tiny-button text="图片裁剪" @click="visible = !visible"></tiny-button>
    <tiny-crop
      ref="crop"
      :cropvisible="visible"
      @update:cropvisible="visible = $event"
      src="static/images/1.jpg"
      zoomable
      :rotatable="false"
    ></tiny-crop>
  </div>
</template>

<script>
import { Crop, Button } from '@opentiny/vue'

export default {
  components: {
    TinyCrop: Crop,
    TinyButton: Button
  },
  data() {
    return {
      visible: false
    }
  },
  methods: {
    replaceHandle() {
      this.$refs.crop.replace('static/images/3.jpg')
    }
  }
}
</script>
