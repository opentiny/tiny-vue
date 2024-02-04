<template>
  <div>
    <tiny-search class="demo-search" v-model="value1" size="medium" placeholder="请输入关键词" clearable></tiny-search>
    <tiny-search class="demo-search" v-model="value2" size="mini" placeholder="请输入关键词" clearable></tiny-search>
  </div>
</template>

<script>
import { Search } from '@opentiny/vue'

export default {
  components: {
    TinySearch: Search
  },
  data() {
    return {
      value1: '',
      value2: ''
    }
  }
}
</script>

<style scoped>
.demo-search {
  margin-bottom: 10px;
}
</style>
