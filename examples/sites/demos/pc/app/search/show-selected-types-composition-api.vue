<template>
  <div style="height: 130px">
    <tiny-search :search-types="searchTypes">
      <template #text="data">
        <b>{{ data.slotScope.text }}</b>
      </template>
    </tiny-search>
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
