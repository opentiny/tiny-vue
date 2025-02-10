<template>
  <tiny-progress class="circle-progress" type="circle" :percentage="50" :width="124" status="exception"></tiny-progress>
</template>

<script setup lang="jsx">
import { TinyProgress } from '@opentiny/vue-mobile'
</script>

<style scoped>
.circle-progress {
  margin-right: 20px;
}
</style>
