<template>
  <div class="content">
    <tiny-button @click="handleClick" :reset-time="0">弹出提示框</tiny-button>
  </div>
</template>

<script setup lang="jsx">
import { Notify, Button as TinyButton } from '@opentiny/vue'

function handleClick() {
  Notify({
    type: 'info',
    title: '通知消息的标题',
    message: '通知消息的正文，通知消息的正文，通知消息的正文，通知消息的正文，通知消息的正文，通知消息的正文',
    position: 'top-right',
    customClass: 'my-custom-cls',
    verticalOffset: 100
  })
}
</script>
