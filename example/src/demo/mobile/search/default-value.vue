<template>
  <tiny-search v-model="value"></tiny-search>
</template>

<script>
import { Search } from '@opentiny/vue'

export default {
  components: {
    TinySearch: Search
  },
  data() {
    return {
      value: '公司'
    }
  }
}
</script>
