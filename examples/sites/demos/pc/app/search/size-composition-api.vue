<template>
  <div>
    <tiny-search class="mb10" v-model="value1" size="medium" placeholder="请输入关键词" clearable></tiny-search>
    <tiny-search class="mb10" v-model="value2" size="mini" placeholder="请输入关键词" clearable></tiny-search>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Search as TinySearch } from '@opentiny/vue'

const value1 = ref('')
const value2 = ref('')
</script>
