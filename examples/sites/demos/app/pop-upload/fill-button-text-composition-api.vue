<template>
  <tiny-pop-upload
    :action="action"
    dialog-title="自定义弹框标题"
    cancel-button-text="自定义取消按钮"
    submit-button-text="自定义提交按钮文本"
    upload-button-text="自定义按钮文本"
  ></tiny-pop-upload>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { PopUpload as TinyPopUpload } from '@opentiny/vue'

const action = ref('http://localhost:3000/api/upload')
</script>
