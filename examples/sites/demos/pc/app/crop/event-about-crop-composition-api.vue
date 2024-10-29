<template>
  <div>
    <tiny-button text="获取Canvas数据" @click="getCanvasData"></tiny-button>
    <tiny-button text="图片裁剪" @click="visible = !visible"></tiny-button>
    <tiny-crop
      :cropvisible="visible"
      @update:cropvisible="visible = $event"
      ref="cropRef"
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

<script setup lang="jsx">
import { ref } from 'vue'
import { TinyButton, TinyCrop, TinyModal } from '@opentiny/vue'

const visible = ref(false)
const cropRef = ref()
const imgUrl = ref(`${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/mountain.png`)

function getCanvasData() {
  TinyModal.message({
    message: `Canvas 数据：${JSON.stringify(cropRef.value.getCropBoxData())}`,
    status: 'info'
  })
}

function cropdata(data) {
  TinyModal.message({
    message: `Canvas 数据：${JSON.stringify(data)}`,
    status: 'info'
  })
}

function cropstart(e) {
  TinyModal.message({
    message: 'cropstart 事件，回调参数：' + e,
    status: 'info'
  })
}

function cropmove(e) {
  TinyModal.message({
    message: 'cropmove 事件，回调参数：' + e,
    status: 'info'
  })
}

function cropend(e) {
  TinyModal.message({ message: 'cropend 事件，回调参数：' + e, status: 'info' })
}

function crop(e) {
  TinyModal.message({ message: 'crop 事件，回调参数：' + e, status: 'info' })
}
</script>
