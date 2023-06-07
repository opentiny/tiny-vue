<template>
  <div>
    <tiny-button type="text" href="/">
      超链接按钮
    </tiny-button>
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
