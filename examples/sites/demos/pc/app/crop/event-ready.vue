<template>
  <div>
    <tiny-button text="销毁 cropper" @click="destroy"></tiny-button>
    <tiny-button text="图片裁剪" @click="visible = !visible"></tiny-button>
    <tiny-crop
      ref="crop"
      :cropvisible="visible"
      @update:cropvisible="visible = $event"
      :src="imgUrl"
      @ready="ready"
    ></tiny-crop>
  </div>
</template>

<script lang="jsx">
import { Button, Crop, Modal } from '@opentiny/vue'

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
  },
  methods: {
    destroy() {
      this.$refs.crop.destroy()
    },
    ready() {
      Modal.message('触发 ready 事件')
    }
  }
}
</script>
