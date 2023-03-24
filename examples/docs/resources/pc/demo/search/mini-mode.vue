<template>
  <tiny-search :mini="true"></tiny-search>
</template>

<script lang="jsx">
import { Search } from '@opentiny/vue'

export default {
  components: {
    TinySearch: Search
  }
}
</script>
