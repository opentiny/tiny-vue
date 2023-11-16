<template>
  <div>
    <tiny-button loading>加载中</tiny-button>
    <tiny-button type="primary" loading>加载中</tiny-button>
    <tiny-button type="success" loading>加载中</tiny-button>
    <tiny-button type="info" loading>加载中</tiny-button>
    <tiny-button type="warning" loading>加载中</tiny-button>
    <tiny-button type="danger" loading>加载中</tiny-button>
  </div>
</template>

<script setup>
import { Button as TinyButton } from '@opentiny/vue'
</script>

<style scoped>
.tiny-button {
  margin-bottom: 10px;
}
</style>
