<template>
  <div>
    <tiny-button @click="getCroppedCanvas" style="margin-bottom: 20px; max-width: unset">
      获取裁剪后的图片数据
    </tiny-button>
    <tiny-button text="图片裁剪" @click="visible = !visible" style="margin-bottom: 20px"></tiny-button>
    <tiny-crop ref="cropRef" :cropvisible="visible" @update:cropvisible="visible = $event" :src="imgUrl"></tiny-crop>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Crop as TinyCrop, Button as TinyButton, Modal } from '@opentiny/vue'

const visible = ref(false)
const cropRef = ref()
const imgUrl = ref(`${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/mountain.png`)

function getCroppedCanvas() {
  const canvas = cropRef.value.getCroppedCanvas()

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
</script>
