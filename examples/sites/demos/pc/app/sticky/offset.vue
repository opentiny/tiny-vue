<template>
  <div class="sticky-wrap">
    <tiny-sticky :z-index="999999" :offset="100">
      <tiny-button type="primary">距离顶部 100px</tiny-button>
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
