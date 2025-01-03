<template>
  <div class="sticky-wrap">
    <tiny-sticky :z-index="999999">
      <tiny-button type="primary">吸顶距离默认 0px</tiny-button>
    </tiny-sticky>
  </div>
</template>

<script>
import { TinySticky, TinyButton } from '@opentiny/vue'

export default {
  components: {
    TinySticky,
    TinyButton
  }
}
</script>

<style scoped>
.sticky-wrap {
  height: 1600px;
}
</style>
