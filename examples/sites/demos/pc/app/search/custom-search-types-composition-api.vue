<template>
  <div style="height: 130px">
    <tiny-search :search-types="searchTypes1">
      <template #poplist="slotScope">
        <b>{{ slotScope.slotScope.text }}</b>
      </template>
    </tiny-search>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Search as TinySearch } from '@opentiny/vue'

const searchTypes1 = ref([
  {
    text: '插槽1',
    value: 1
  },
  {
    text: '插槽2',
    value: 2
  },
  {
    text: '插槽3',
    value: 3
  }
])
</script>
