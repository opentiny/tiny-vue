<template>
  <div>
    <tiny-search v-model="value" placeholder="请输入关键词"></tiny-search>
    {{ value }}
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Search as TinySearch } from '@opentiny/vue'

const value = ref('')
</script>
