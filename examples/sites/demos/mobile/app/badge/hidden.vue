<template>
  <div class="badge-wrap">
    <tiny-badge :value="unread" :hidden="unread === 0">我的待办</tiny-badge>
    <br />
    <br />
    <tiny-button :disabled="unread === 0" @click="read">读取一条消息</tiny-button>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { TinyBadge, TinyButton } from '@opentiny/vue-mobile'

const unread = ref(2)

function read() {
  if (unread.value > 0) {
    unread.value = unread.value - 1
  }
}
</script>

<style>
.badge-wrap {
  padding: 20px;
}
</style>
