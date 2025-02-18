<template>
  <div class="content">
    <tiny-button @click="successClick" :reset-time="0">500ms 后自动关闭提示框</tiny-button>
    <tiny-button @click="errorClick" :reset-time="0">5000ms 后自动关闭提示框</tiny-button>
  </div>
</template>

<script setup lang="jsx">
import { TinyButton, TinyNotify } from '@opentiny/vue'

function successClick() {
  TinyNotify({
    type: 'success',
    title: '通知消息的标题',
    message: '500ms 后自动关闭提示框',
    position: 'top-right',
    duration: 500
  })
}

function errorClick() {
  TinyNotify({
    type: 'error',
    title: '通知消息的标题',
    message: '5000ms 后自动关闭提示框',
    position: 'top-right',
    duration: 5000
  })
}
</script>
