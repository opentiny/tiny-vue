<template>
  <div>
    <tiny-button text="获取Canvas数据" @click="getCanvasData"></tiny-button>
    <tiny-button text="图片裁剪" @click="visible = !visible"></tiny-button>
    <tiny-crop
      :cropvisible="visible"
      @update:cropvisible="visible = $event"
      ref="crop"
      src="static/images/mountain.png"
      @cropstart="cropstart"
      @cropmove="cropmove"
      @cropend="cropend"
      @crop="crop"
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
    getCanvasData() {
      Modal.message({
        message: `Canvas 数据：${JSON.stringify(this.$refs.crop.getCropBoxData())}`,
        status: 'info'
      })
    },
    cropstart(e) {
      Modal.message({
        message: 'cropstart 事件，回调参数：' + e,
        status: 'info'
      })
    },
    cropmove(e) {
      Modal.message({
        message: 'cropmove 事件，回调参数：' + e,
        status: 'info'
      })
    },
    cropend(e) {
      Modal.message({ message: 'cropend 事件，回调参数：' + e, status: 'info' })
    },
    crop(e) {
      Modal.message({ message: 'crop 事件，回调参数：' + e, status: 'info' })
    }
  }
}
</script>
