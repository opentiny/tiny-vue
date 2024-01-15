<template>
  <tiny-pop-upload
    :action="action"
    multiple
    :limit="2"
    @remove="handleRemove"
    @error="handleError"
    @exceed="handleExceed"
    @progress="handleProgress"
    @success="handleSuccess"
  ></tiny-pop-upload>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { PopUpload as TinyPopUpload, Modal } from '@opentiny/vue'

const action = ref('http://localhost:3000/api/upload')

function handleRemove() {
  Modal.message('触发删除文件回调事件')
}

function handleProgress() {
  Modal.message('文件上传时的回调 返回进程')
}

function handleError() {
  Modal.message('文件上传失败回调')
}

function handleExceed() {
  Modal.message('触发文件超出个数限制回调事件')
}

function handleSuccess() {
  Modal.message('触发上传文件成功回调事件')
}
</script>
