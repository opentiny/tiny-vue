<template>
  <tiny-search @search="search"></tiny-search>
</template>

<script>
import { Search, Modal } from '@opentiny/vue'

export default {
  components: {
    TinySearch: Search
  },
  methods: {
    search(key, value) {
      Modal.message(`${value}`)
    }
  }
}
</script>
