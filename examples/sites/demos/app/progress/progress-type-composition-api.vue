<template>
  <tiny-progress class="progress" type="line" :percentage="50"></tiny-progress>
</template>

<script setup lang="jsx">
import { Progress as TinyProgress } from '@opentiny/vue'
</script>

<style scoped>
.progress {
  margin-bottom: 20px;
}
</style>
