<template>
  <div style="height: 130px">
    <tiny-search :search-types="searchTypes" :type-value="typeValue"></tiny-search>
  </div>
</template>

<script lang="jsx">
import { TinySearch } from '@opentiny/vue'

export default {
  components: {
    TinySearch
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
      ],
      typeValue: null
    }
  },
  created() {
    this.typeValue = this.searchTypes[2]
  }
}
</script>
