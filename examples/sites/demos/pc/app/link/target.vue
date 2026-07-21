<template>
  <div>
    <p>Link 组件 target 属性示例</p>
    <div class="demo-link-target">
      <tiny-link :underline="false" href="https://opentiny.design/tiny-vue" target="_blank">在新窗口打开</tiny-link>
      <tiny-link :underline="false" href="https://opentiny.design/tiny-vue" target="_self">在当前窗口打开</tiny-link>
      <tiny-link :underline="false" href="https://opentiny.design/tiny-vue" target="_parent">在父框架中打开</tiny-link>
      <tiny-link :underline="false" href="https://opentiny.design/tiny-vue" target="_top">在整个窗口中打开</tiny-link>
    </div>
  </div>
</template>

<script>
import { TinyLink } from '@opentiny/vue'

export default {
  components: {
    TinyLink
  }
}
</script>

<style scoped>
.demo-link-target {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
