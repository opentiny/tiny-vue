<template>
  <tiny-search v-model="value"></tiny-search>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Search as TinySearch } from '@opentiny/vue'

const value = ref('搜索')
</script>
