<template>
  <div>
    <tiny-button text="启用裁剪框" @click="enable"></tiny-button>
    <tiny-button text="图片裁剪" @click="visible = !visible"></tiny-button>
    <tiny-crop
      ref="crop"
      :cropvisible="visible"
      @update:cropvisible="visible = $event"
      src="static/images/1.jpg"
      @ready="ready"
    ></tiny-crop>
  </div>
</template>

<script>
import { Button, Crop, Modal } from '@opentiny/vue'

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
    enable() {
      this.$refs.crop.enable() // 启用裁剪框
    },
    ready() {
      this.$refs.crop.disable() // 禁用裁剪框
      Modal.message('触发 ready 事件')
    }
  }
}
</script>
