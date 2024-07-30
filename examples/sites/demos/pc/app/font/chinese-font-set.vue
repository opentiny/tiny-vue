<template>
  <tiny-layout class="tiny-font">
    <span>用户体验</span>
    <p>微软雅黑</p>
  </tiny-layout>
</template>

<script lang="jsx">
import { Layout } from '@opentiny/vue'

export default {
  components: {
    TinyLayout: Layout
  }
}
</script>

<style scoped>
.tiny-font span {
  font-size: 14px;
  line-height: 20px;
}
.tiny-font p {
  font-size: 24px;
  line-height: 48px;
}
</style>
