<template>
  <div>
    <tiny-search mini></tiny-search>
    <tiny-search mini class="mt24 custom-search"></tiny-search>
  </div>
</template>

<script setup lang="jsx">
import { Search as TinySearch } from '@opentiny/vue'
</script>

<style scoped>
:deep(.tiny-search.custom-search.collapse .tiny-search__line) {
  border: none;
}
</style>
