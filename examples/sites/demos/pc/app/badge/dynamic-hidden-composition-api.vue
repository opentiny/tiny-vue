<template>
  <div>
    <tiny-badge :value="unread" :hidden="unread === 0">我的待办</tiny-badge>
    <br />
    <tiny-button :disabled="unread === 0" @click="read">读取一条消息</tiny-button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { TinyBadge, TinyButton } from '@opentiny/vue'

const unread = ref(2)

function read() {
  if (unread.value > 0) {
    unread.value = unread.value - 1
  }
}
</script>
