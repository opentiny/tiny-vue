<template>
  <tiny-search v-model="value"></tiny-search>
</template>

<script lang="jsx">
import { Search } from '@opentiny/vue'

export default {
  components: {
    TinySearch: Search
  },
  data() {
    return {
      value: '搜索'
    }
  }
}
</script>
