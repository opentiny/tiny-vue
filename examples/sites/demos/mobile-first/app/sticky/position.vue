<template>
  <div class="h-[1500px]">
    <div class="h-[800px]"></div>
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
