<template>
  <div class="content">
    <tiny-button @click="baseClick" :reset-time="0">不显示关闭按钮</tiny-button>
  </div>
</template>

<script setup lang="jsx">
import { TinyNotify, TinyButton } from '@opentiny/vue'

function baseClick() {
  TinyNotify({
    type: 'info',
    title: '通知消息的标题',
    message: '通知消息的正文，通知消息的正文，通知消息的正文，通知消息的正文，通知消息的正文，通知消息的正文',
    showClose: false,
    position: 'top-right'
  })
}
</script>
