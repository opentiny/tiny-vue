<template>
  <div class="content">
    <tiny-button @click="baseClick" :reset-time="0">不显示类型图标</tiny-button>
  </div>
</template>

<script setup lang="jsx">
import { Notify, Button as TinyButton } from '@opentiny/vue'

function baseClick() {
  Notify({
    type: 'info',
    title: (h, params) => <h4>通知消息的标题</h4>,
    message: '通知消息的正文，通知消息的正文，通知消息的正文，通知消息的正文，通知消息的正文，通知消息的正文',
    showIcon: false,
    position: 'top-right',
    duration: 500000
  })
}
</script>
