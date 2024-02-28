<template>
  <div class="parent">
    <tiny-float-button type="success" right="" left="0" bottom="0" top="-9px" trigger="" href="/" description="跳">
    </tiny-float-button>
  </div>
</template>

<script>
import { FloatButton as TinyFloatButton } from '@opentiny/vue'

export default {
  components: {
    TinyFloatButton
  }
}
</script>

<style scoped>
.parent {
  position: relative;
}

.tiny-float-button {
  position: absolute;
}
</style>
