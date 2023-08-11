<template>
  <div>
    <tiny-button @click="clearn" style="margin-bottom: 20px">清除裁剪区域数据</tiny-button>
    <tiny-button @click="getData" style="margin-bottom: 20px">获取裁剪区域数据</tiny-button>
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

function clearn() {
  cropRef.value.clear()
}

function getData() {
  Modal.message({
    message: `裁剪区域数据：${JSON.stringify(cropRef.value.getData())}`,
    status: 'info'
  })
}
</script>
