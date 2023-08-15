<template>
  <tiny-search @change="change"></tiny-search>
</template>

<script lang="jsx">
import { Search, Modal } from '@opentiny/vue'

export default {
  components: {
    TinySearch: Search
  },
  methods: {
    change(key, value) {
      Modal.message(`${value}`)
    }
  }
}
</script>
