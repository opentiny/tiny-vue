<template>
  <tiny-search @change="change"></tiny-search>
</template>

<script>
import { TinySearch, TinyModal } from '@opentiny/vue'

export default {
  components: {
    TinySearch
  },
  methods: {
    change(key, value) {
      TinyModal.message(`${value}`)
    }
  }
}
</script>
