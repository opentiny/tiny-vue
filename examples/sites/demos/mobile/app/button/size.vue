<template>
  <div class="button-wrap">
    <tiny-button round>默认尺寸</tiny-button>
    <tiny-button type="primary" size="large" round>large</tiny-button>
    <tiny-button type="success" size="medium" round>medium</tiny-button>
    <tiny-button type="info" size="small" round>small</tiny-button>
    <tiny-button type="warning" size="mini" round>mini</tiny-button>
    <tiny-button type="primary" size="large" round>大号按钮</tiny-button>
    <tiny-button type="success" size="medium" round>中号按钮</tiny-button>
    <tiny-button type="info" size="small" round>小号按钮</tiny-button>
    <tiny-button type="warning" size="mini" round>mini按钮</tiny-button>
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
.button-wrap .tiny-mobile-button {
  margin-right: 16px;
  margin-bottom: 16px;
}
</style>
