<template>
  <div class="gray-bg">
    <tiny-button ghost reset-time="0">幽灵按钮</tiny-button>
    <tiny-button ghost type="primary" reset-time="0">主要按钮</tiny-button>
    <tiny-button ghost type="success" reset-time="0">成功按钮</tiny-button>
    <tiny-button ghost type="info" reset-time="0">信息按钮</tiny-button>
    <tiny-button ghost type="warning" reset-time="0">告警按钮</tiny-button>
    <tiny-button ghost type="danger" reset-time="0">危险按钮</tiny-button>
  </div>
</template>

<script setup>
import { Button as TinyButton } from '@opentiny/vue'
</script>

<style scoped>
.gray-bg {
  background: #fafafa;
  padding: 20px 10px 10px;
}
.tiny-button {
  margin-bottom: 10px;
  margin-left: 0;
  margin-right: 24px;
}
</style>
