<template>
  <div>
    <tiny-button type="text"> 文本按钮 </tiny-button>
    <tiny-button type="text" text="text属性"></tiny-button>
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
