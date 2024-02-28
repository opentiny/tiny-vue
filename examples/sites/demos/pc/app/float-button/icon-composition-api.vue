<template>
  <div class="parent">
    <tiny-float-button bottom="-15px" right="100px" trigger="" :icon="IconDel"> </tiny-float-button>
  </div>
</template>

<script setup>
import { FloatButton as TinyFloatButton } from '@opentiny/vue'
import { iconDel } from '@opentiny/vue-icon'

const IconDel = iconDel()
</script>

<style scoped>
.parent {
  position: relative;
}
.tiny-float-button {
  position: absolute;
}
</style>
