<template>
  <div class="button-wrap">
    <p>按钮类型</p>
    <tiny-button type="primary" reset-time="500">重置时间</tiny-button>
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
body {
  overflow: hidden;
}
.button-wrap {
  padding: 0 10px;
  overflow-y: scroll;
  height: 100%;
}
.button-wrap .tiny-mobile-button {
  margin-right: 16px;
  margin-bottom: 16px;
}
</style>
