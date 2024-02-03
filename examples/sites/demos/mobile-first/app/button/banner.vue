<template>
  <div>
    <tiny-button type="primary" banner native-type="submit">默认按钮</tiny-button>
    <tiny-button type="primary" custom-class="mt-4" banner plain>线性按钮</tiny-button>
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
