<template>
  <div class="demo-search-type">
    <tiny-search :search-types="searchTypes"></tiny-search>
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
      searchTypes: [
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
      ]
    }
  }
}
</script>

<style scoped>
.demo-search-type {
  min-height: 200px;
}
</style>
