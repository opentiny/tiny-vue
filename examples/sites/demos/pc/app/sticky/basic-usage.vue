<template>
  <div class="sticky-wrap">
    <tiny-sticky :z-index="999999">
      <tiny-button type="primary">吸顶距离默认0px</tiny-button>
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
  height: 1600px;
}
</style>
