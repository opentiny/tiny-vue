<template>
  <div class="content">
    <tiny-pager mode="number" :total="100"></tiny-pager>
  </div>
</template>

<script setup lang="jsx">
import { Pager as TinyPager } from '@opentiny/vue'
</script>

<style scoped>
.content {
  margin-bottom: 20px;
}
</style>
