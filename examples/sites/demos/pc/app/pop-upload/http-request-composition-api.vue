<template>
  <tiny-pop-upload :http-request="httpRequest"></tiny-pop-upload>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { TinyPopUpload, TinyModal } from '@opentiny/vue'

const httpRequest = ref(() => {
  return new Promise((resolve) => {
    // 此处为用户自定义的上传服务请求
    setTimeout(() => {
      TinyModal.message('上传成功')
    }, 500)
  })
})
</script>
