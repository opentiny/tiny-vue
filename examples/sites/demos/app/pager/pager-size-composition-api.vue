<template>
  <div class="content">
    <tiny-pager mode="number" :total="100" layout="total,sizes,prev,pager,next" />
    <tiny-pager mode="number" :total="100" size="mini" layout="total,sizes,prev,pager,next" />
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
