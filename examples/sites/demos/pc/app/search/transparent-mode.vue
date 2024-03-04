<template>
  <div class="content">
    <tiny-search mini transparent :search-types="searchTypes"></tiny-search>
  </div>
</template>

<script lang="jsx">
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
.content {
  background: #333;
  padding: 10px 10px;
  text-align: right;
}
</style>
