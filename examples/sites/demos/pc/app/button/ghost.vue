<template>
  <div class="gray-bg">
    <tiny-button ghost reset-time="0" type="primary">主要按钮</tiny-button>
    <tiny-button ghost reset-time="0">次要按钮</tiny-button>
    <tiny-button ghost reset-time="0" type="success">成功按钮</tiny-button>
    <tiny-button ghost reset-time="0" type="info">信息按钮</tiny-button>
    <tiny-button ghost reset-time="0" type="warning">告警按钮</tiny-button>
    <tiny-button ghost reset-time="0" type="danger">危险按钮</tiny-button>
  </div>
</template>

<script>
import { Button } from '@opentiny/vue'

export default {
  components: {
    TinyButton: Button
  }
}
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
