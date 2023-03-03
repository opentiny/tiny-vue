<template>
  <div class="button-wrap">
    <tiny-button round>默认1秒</tiny-button>
    <tiny-button type="primary" round :reset-time="2000">禁用2秒</tiny-button>
    <tiny-button type="success" round :reset-time="5000">禁用5秒</tiny-button>
    <tiny-button round>圆角按钮</tiny-button>
    <tiny-button type="primary" round disabled>主要按钮</tiny-button>
    <tiny-button type="success" round disabled>成功按钮</tiny-button>
    <tiny-button type="info" round disabled>信息按钮</tiny-button>
    <tiny-button type="warning" round disabled>警告按钮</tiny-button>
    <tiny-button type="danger" round disabled>危险按钮</tiny-button>
    <tiny-button type="secondary" round disabled>次要按钮</tiny-button>
    <tiny-button round disabled>弱按钮</tiny-button>
  </div>
</template>

<script>
import { Button } from '@opentiny/vue'

export default {
  components: {
    TinyButton: Button
  },
  data() {
    return {}
  }
}
</script>

<style scoped>
.button-wrap {
  padding: 10px 20px;
}
.button-wrap .tiny-mobile-button {
  margin-right: 16px;
  margin-bottom: 16px;
}
</style>
