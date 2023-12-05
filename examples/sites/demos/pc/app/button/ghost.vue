<template>
  <div class="gray-bg">
    <tiny-button ghost>幽灵按钮</tiny-button>
    <tiny-button ghost type="primary">主要按钮</tiny-button>
    <tiny-button ghost type="success">成功按钮</tiny-button>
    <tiny-button ghost type="info">信息按钮</tiny-button>
    <tiny-button ghost type="warning">告警按钮</tiny-button>
    <tiny-button ghost type="danger">危险按钮</tiny-button>
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
  background: #ccc;
  padding: 20px 10px 10px;
}
.tiny-button {
  margin-bottom: 10px;
}
</style>
