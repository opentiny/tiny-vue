<template>
  <tiny-search @input="input"></tiny-search>
</template>

<script>
import { Search, Modal } from '@opentiny/vue'

export default {
  components: {
    TinySearch: Search
  },
  methods: {
    input(key, value) {
      Modal.message(`${value}`)
    }
  }
}
</script>
