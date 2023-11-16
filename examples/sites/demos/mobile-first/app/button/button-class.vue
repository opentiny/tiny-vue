<template>
  <div class="demo">
    <tiny-button>默认按钮</tiny-button>
    <tiny-button custom-class="text-color-brand-active bg-color-bg-3"> 主要按钮 </tiny-button>
  </div>
</template>

<script>
import { Button } from '@opentiny/vue'

export default {
  components: {
    TinyButton: Button
  }
}
</script>
