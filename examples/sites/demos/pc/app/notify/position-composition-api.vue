<template>
  <div class="content">
    <tiny-button @click="handleClick('top-left')" :reset-time="0">top-left</tiny-button>
    <tiny-button @click="handleClick('top-right')" :reset-time="0">top-right</tiny-button>
    <br />
    <br />
    <tiny-button @click="handleClick('bottom-left')" :reset-time="0">bottom-left</tiny-button>
    <tiny-button @click="handleClick('bottom-right')" :reset-time="0">bottom-right</tiny-button>
  </div>
</template>

<script setup>
import { Notify, Button as TinyButton } from '@opentiny/vue'

function handleClick(pos) {
  Notify({
    title: '通知消息的标题',
    message: '通知消息的正文，通知消息的正文，通知消息的正文，通知消息的正文，通知消息的正文，通知消息的正文',
    position: pos
  })
}
</script>

<style scoped>
.tiny-button {
  min-width: 120px;
}
</style>
