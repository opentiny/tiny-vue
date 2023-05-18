<template>
  <tiny-search :mini="true"></tiny-search>
</template>

<script>
import { Search } from '@opentiny/vue'

export default {
  components: {
    TinySearch: Search
  }
}
</script>
