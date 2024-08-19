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

<script setup lang="jsx">
import { ref } from 'vue'
import { Button as TinyButton, Crop as TinyCrop } from '@opentiny/vue'

const visible = ref(false)
const imgUrl = ref(`${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/mountain.png`)

function setAspectRatio(aspectRatio) {
  Modal.message({
    message: `宽高比数据: ${JSON.stringify(aspectRatio)}`,
    status: 'info'
  })
}
</script>
