<template>
  <tiny-search @change="change" @input="input"></tiny-search>
</template>

<script lang="jsx">
import { Search, Modal } from '@opentiny/vue'

export default {
  components: {
    TinySearch: Search
  },
  methods: {
    change(key, value) {
      Modal.message(`change: ${value}`)
    },
    input(key, value) {
      Modal.message(`input: ${key}, ${JSON.stringify(value)}`)
    }
  }
}
</script>
