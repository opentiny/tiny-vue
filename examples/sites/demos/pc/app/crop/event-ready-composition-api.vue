<template>
  <div>
    <tiny-button text="销毁 cropper" @click="destroy"></tiny-button>
    <tiny-button text="图片裁剪" @click="visible = !visible"></tiny-button>
    <tiny-crop
      ref="cropRef"
      :cropvisible="visible"
      @update:cropvisible="visible = $event"
      :src="imgUrl"
      @ready="ready"
    ></tiny-crop>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Button as TinyButton, Crop as TinyCrop, Modal } from '@opentiny/vue'

const visible = ref(false)
const cropRef = ref()
const imgUrl = ref(`${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/mountain.png`)

function destroy() {
  cropRef.value.destroy()
}

function ready() {
  Modal.message('触发 ready 事件')
}
</script>
