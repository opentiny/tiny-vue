<template>
  <div>
    <tiny-alert custom-class="customClass" type="error" description="type 为 error"> </tiny-alert>
  </div>
</template>

<script setup>
import { TinyAlert } from '@opentiny/vue'
</script>

<style scoped>
.customClass {
  background-color: var(--tv-color-bg-disabled-control-active);
}
</style>
