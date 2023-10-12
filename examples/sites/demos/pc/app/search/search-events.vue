<template>
  <tiny-search @search="search" is-enter-search></tiny-search>
</template>

<script lang="jsx">
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
