<template>
  <tiny-search :search-types="searchTypes" @select="select"></tiny-search>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Search as TinySearch, Modal } from '@opentiny/vue'

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

function select(value) {
  Modal.message({ message: `${value.text}`, status: 'info' })
}
</script>
