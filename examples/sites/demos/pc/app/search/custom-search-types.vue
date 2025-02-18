<template>
  <div style="height: 130px">
    <tiny-search :search-types="searchTypes1">
      <template #poplist="slotScope">
        <b>{{ slotScope.slotScope.text }}</b>
      </template>
    </tiny-search>
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
      searchTypes1: [
        {
          text: '插槽 1',
          value: 1
        },
        {
          text: '插槽 2',
          value: 2
        },
        {
          text: '插槽 3',
          value: 3
        }
      ]
    }
  }
}
</script>
