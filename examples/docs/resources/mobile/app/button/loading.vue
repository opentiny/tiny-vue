<template>
  <div class="button-wrap">
    <tiny-button loading>加载中</tiny-button>
    <tiny-button type="primary" loading>加载中</tiny-button>
    <tiny-button type="success" loading>加载中</tiny-button>
    <tiny-button type="info" loading>加载中</tiny-button>
    <tiny-button type="warning" loading>加载中</tiny-button>
    <tiny-button type="danger" loading>加载中</tiny-button>
  </div>
</template>

<script lang="jsx">
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
  padding: 0 10px;
}
.button-wrap .tiny-mobile-button:not(:nth-child(3n)) {
  margin-right: 16px;
  margin-bottom: 16px;
}
</style>
