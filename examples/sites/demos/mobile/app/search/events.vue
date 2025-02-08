<template>
  <div class="search-wrap">
    <tiny-search placeholder="搜索" @change="handleChange" @search="handleSearch"></tiny-search>
    输入的搜索内容为：{{ searchValue }}
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { TinySearch } from '@opentiny/vue-mobile'

const searchValue = ref('')

function handleChange(obj, val) {
  searchValue.value = val
  console.log('当前改变的值为：' + val)
}

function handleSearch(val) {
  console.log('搜索内容为：' + val)
}
</script>

<style>
.search-wrap {
  height: 100%;
  padding: 20px;
  background: #f4f4f4;
}
</style>
