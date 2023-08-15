<template>
  <tiny-search :search-types="searchTypes" @select="select"></tiny-search>
</template>

<script lang="jsx">
import { Search, Modal } from '@opentiny/vue'

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
  },
  methods: {
    select(value) {
      Modal.message({ message: `${value.text}`, status: 'info' })
    }
  }
}
</script>
