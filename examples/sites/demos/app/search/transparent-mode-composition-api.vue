<template>
  <div class="content">
    <tiny-search mini transparent :search-types="searchTypes"></tiny-search>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Search as TinySearch } from '@opentiny/vue'

const searchTypes = ref([
  {
    text: '找人',
    value: 1
  },
  {
    text: '找文档',
    value: 2
  },
  {
    text: '找谁',
    value: 3
  }
])
</script>

<style scoped>
.content {
  background: #333;
  padding: 10px 10px;
  text-align: right;
}
</style>
