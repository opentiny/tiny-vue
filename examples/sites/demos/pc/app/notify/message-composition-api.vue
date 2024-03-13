<template>
  <div class="content">
    <tiny-button @click="baseClick" :reset-time="0">自定义内容</tiny-button>
  </div>
</template>

<script setup>
import { Button as TinyButton, Notify } from '@opentiny/vue'

function baseClick() {
  Notify({
    type: 'info',
    title: '通知',
    message: '自定义内容',
    position: 'top-right'
  })
}
</script>
