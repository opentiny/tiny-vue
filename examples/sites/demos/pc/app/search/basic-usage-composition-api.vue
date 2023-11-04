<template>
  <div>
    <tiny-search v-model="value" placeholder="请输入关键词"></tiny-search>
    <div class="mt10">当前搜索值为：{{ value }}</div>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Search as TinySearch } from '@opentiny/vue'

const value = ref('默认值')
</script>
