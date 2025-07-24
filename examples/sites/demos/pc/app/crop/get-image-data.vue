<template>
  <div>
    <tiny-button @click="getImageData" style="margin-bottom: 20px">获取图像数据</tiny-button>
    <tiny-button @click="getCanvasData" style="margin-bottom: 20px">获取画布位置和大小数据</tiny-button>
    <tiny-button text="图片裁剪" @click="visible = !visible" style="margin-bottom: 20px"></tiny-button>
    <tiny-crop ref="crop" :cropvisible="visible" @update:cropvisible="visible = $event" :src="imgUrl"></tiny-crop>
  </div>
</template>

<script lang="jsx">
import { TinyCrop, TinyButton, TinyModal } from '@opentiny/vue'

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
    getImageData() {
      TinyModal.message({
        message: `图像数据：${JSON.stringify(this.$refs.crop.getImageData())}`,
        status: 'info'
      })
    },
    getCanvasData() {
      TinyModal.message({
        message: `画布位置和大小数据：${JSON.stringify(this.$refs.crop.getCanvasData())}`,
        status: 'info'
      })
    }
  }
}
</script>
