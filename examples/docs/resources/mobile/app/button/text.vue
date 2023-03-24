<template>
  <div class="button-wrap">
    <tiny-button type="text">文字按钮</tiny-button>
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
