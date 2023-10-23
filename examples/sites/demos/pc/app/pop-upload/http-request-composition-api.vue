<template>
  <tiny-pop-upload :http-request="httpRequest"></tiny-pop-upload>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { PopUpload as TinyPopUpload, Modal } from '@opentiny/vue'

const httpRequest = ref(() => {
  return new Promise((resolve) => {
    // 此处为用户自定义的上传服务请求
    setTimeout(() => {
      Modal.message('上传成功')
    }, 500)
  })
})
</script>
