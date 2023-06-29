<template>
  <div>
    <tiny-button @click="getCroppedCanvas" style="margin-bottom: 20px; max-width: unset"> 获取裁剪后的图片数据 </tiny-button>
    <tiny-button text="图片裁剪" @click="visible = !visible" style="margin-bottom: 20px"></tiny-button>
    <tiny-crop ref="crop" :cropvisible="visible" @update:cropvisible="visible = $event" src="static/images/mountain.png"></tiny-crop>
  </div>
</template>

<script lang="jsx">
import { Crop, Button, Modal } from '@opentiny/vue'

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
    getCroppedCanvas() {
      const canvas = this.$refs.crop.getCroppedCanvas()

      if (canvas.toBlob) {
        // 生成 Blob 图片格式
        canvas.toBlob((img) => {
          Modal.message({ message: `Blob：${img.size}`, status: 'info' })
        })
      } else if (canvas.msToBlob) {
        // 生成兼容 IE 的 Blob 图片格式
        const img = canvas.msToBlob()
        Modal.message({ message: `Blob：${img.size}`, status: 'info' })
      } else {
        // 生成 base64 图片格式
        canvas.toDataURL('image/jpeg')
      }
    }
  }
}
</script>
