<template>
  <div class="parent">
    <tiny-float-button reset-time="2000" type="success" right="" left="0" bottom="0" trigger="click" description="点">
      展开</tiny-float-button
    >
  </div>
</template>

<script>
import { FloatButton as TinyFloatButton } from '@opentiny/vue'

export default {
  TinyFloatButton
}
</script>

<style scoped>
.parent {
  position: relative;
  height: 100px;
}

.tiny-float-button {
  position: absolute;
}
</style>
