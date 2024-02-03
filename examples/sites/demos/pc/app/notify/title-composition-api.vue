<template>
  <div class="content">
    <tiny-button @click="baseClick" :reset-time="0">自定义标题</tiny-button>
  </div>
</template>

<script setup>
import { Button as TinyButton, Notify } from '@opentiny/vue'

function baseClick() {
  Notify({
    type: 'info',
    title: '自定义标题',
    message: '自定义标题',
    position: 'top-right'
  })
}
</script>
