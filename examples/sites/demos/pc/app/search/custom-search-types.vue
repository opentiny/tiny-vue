<template>
  <div style="height: 200px">
    <tiny-search :search-types="searchTypes1" :type-value="typeValue">
      <template #poplist="slotScope">
        <b>{{ slotScope.slotScope.text }}</b>
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
      searchTypes1: [
        {
          text: '插槽1',
          value: 1
        },
        {
          text: '插槽2',
          value: 2
        },
        {
          text: '插槽3',
          value: 3
        }
      ],
      typeValue: null
    }
  },
  created() {
    this.typeValue = this.searchTypes1[2]
  }
}
</script>
