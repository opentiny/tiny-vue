<template>
  <div class="content">
    <tiny-button @click="baseClick" :reset-time="0">自定义类型图标</tiny-button>
  </div>
</template>

<script setup>
import { TinyButton, TinyNotify } from '@opentiny/vue'
import { IconInfo } from '@opentiny/vue-icon'

function baseClick() {
  TinyNotify({
    type: 'info',
    title: '通知',
    message: '通知消息的正文，通知消息的正文，通知消息的正文，通知消息的正文，通知消息的正文，通知消息的正文',
    statusIcon: IconInfo(),
    position: 'top-right'
  })
}
</script>
