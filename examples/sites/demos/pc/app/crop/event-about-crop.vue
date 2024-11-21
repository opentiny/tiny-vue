<template>
  <div>
    <tiny-button text="获取Canvas数据" @click="getCanvasData"></tiny-button>
    <tiny-button text="图片裁剪" @click="visible = !visible"></tiny-button>
    <tiny-crop
      :cropvisible="visible"
      @update:cropvisible="visible = $event"
      ref="crop"
      :src="imgUrl"
      @cropstart="cropstart"
      @cropmove="cropmove"
      @cropend="cropend"
      @crop="crop"
      @cropdata="cropdata"
      enable
    ></tiny-crop>
  </div>
</template>

<script lang="jsx">
import { TinyButton, TinyCrop, TinyModal } from '@opentiny/vue'

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
  },
  methods: {
    getCanvasData() {
      TinyModal.message({
        message: `Canvas 数据：${JSON.stringify(this.$refs.crop.getCropBoxData())}`,
        status: 'info'
      })
    },
    cropdata(data) {
      TinyModal.message({
        message: `Canvas 数据：${JSON.stringify(data)}`,
        status: 'info'
      })
    },
    cropstart(e) {
      TinyModal.message({
        message: 'cropstart 事件，回调参数：' + e,
        status: 'info'
      })
    },
    cropmove(e) {
      TinyModal.message({
        message: 'cropmove 事件，回调参数：' + e,
        status: 'info'
      })
    },
    cropend(e) {
      TinyModal.message({ message: 'cropend 事件，回调参数：' + e, status: 'info' })
    },
    crop(e) {
      TinyModal.message({ message: 'crop 事件，回调参数：' + e, status: 'info' })
    }
  }
}
</script>
