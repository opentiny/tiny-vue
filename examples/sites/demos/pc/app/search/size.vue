<template>
  <div>
    <tiny-search class="mb10" v-model="value1" size="medium" placeholder="请输入关键词" clearable></tiny-search>
    <tiny-search class="mb10" v-model="value2" size="mini" placeholder="请输入关键词" clearable></tiny-search>
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
