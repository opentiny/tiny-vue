<template>
  <div>
    <tiny-alert custom-class="customClass" type="error" description="type 为 error"> </tiny-alert>
  </div>
</template>

<script setup>
import { Alert as TinyAlert } from '@opentiny/vue'
</script>

<style scoped>
.customClass {
  background-color: pink;
}
</style>
