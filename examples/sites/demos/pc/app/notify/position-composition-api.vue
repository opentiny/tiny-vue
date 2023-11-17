<template>
  <div class="content">
    <tiny-button @click="infoClick" :reset-time="0">默认bottom-right</tiny-button>
    <tiny-button @click="successClick" :reset-time="0">top-right</tiny-button>
  </div>
</template>

<script setup lang="jsx">
import { Notify, Button as TinyButton } from '@opentiny/vue'

function infoClick() {
  Notify({
    type: 'info',
    title: (h, params) => <h4>通知消息的标题</h4>,
    message: '通知消息的正文，通知消息的正文，通知消息的正文，通知消息的正文，通知消息的正文，通知消息的正文'
  })
}

function successClick() {
  Notify({
    type: 'success',
    message: '通知消息的正文，通知消息的正文，通知消息的正文，通知消息的正文，通知消息的正文，通知消息的正文',
    position: 'top-right'
  })
}
</script>
