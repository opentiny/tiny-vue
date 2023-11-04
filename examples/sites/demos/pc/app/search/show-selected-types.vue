<template>
  <div style="height: 130px">
    <tiny-search :search-types="searchTypes">
      <template #text="data">
        <b>{{ data.slotScope.text }}</b>
      </template>
    </tiny-search>
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
