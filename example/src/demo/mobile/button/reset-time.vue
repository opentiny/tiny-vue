<template>
  <div class="button-wrap">
    <tiny-button round>默认1秒</tiny-button>
    <tiny-button type="primary" round :reset-time="2000">禁用2秒</tiny-button>
    <tiny-button type="success" round :reset-time="5000">禁用5秒</tiny-button>
    <tiny-button round disabled>弱按钮禁用</tiny-button>
    <tiny-button type="secondary" round disabled>次按钮禁用</tiny-button>
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
