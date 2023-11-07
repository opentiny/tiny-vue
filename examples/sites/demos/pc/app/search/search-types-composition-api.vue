<template>
  <div style="height: 130px">
    <tiny-search :search-types="searchTypes" :type-value="typeValue"></tiny-search>
  </div>
</template>

<script setup lang="jsx">
import { reactive } from 'vue'
import { Search as TinySearch } from '@opentiny/vue'

const searchTypes = reactive([
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
const typeValue = reactive(searchTypes[2])
</script>
