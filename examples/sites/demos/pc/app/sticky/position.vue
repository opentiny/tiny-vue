<template>
  <div class="sticky-wrap">
    <div class="fill-box"></div>
    <tiny-sticky :z-index="999999" position="bottom" :offset="50">
      <tiny-button type="primary">距离底部50px</tiny-button>
    </tiny-sticky>
  </div>
</template>

<script>
import { Sticky, Button } from '@opentiny/vue'

export default {
  components: {
    TinySticky: Sticky,
    TinyButton: Button
  }
}
</script>

<style scoped>
.sticky-wrap {
  height: 1000px;
}

.fill-box {
  height: 800px;
}
</style>
