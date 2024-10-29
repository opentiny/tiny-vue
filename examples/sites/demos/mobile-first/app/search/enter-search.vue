<template>
  <tiny-search @search="search" is-enter-search></tiny-search>
</template>

<script>
import { TinySearch, TinyModal } from '@opentiny/vue'

export default {
  components: {
    TinySearch
  },
  methods: {
    search(key, value) {
      TinyModal.message(`${value}`)
    }
  }
}
</script>
