<template>
  <tiny-search v-model="value"></tiny-search>
</template>

<script>
import { TinySearch } from '@opentiny/vue'

export default {
  components: {
    TinySearch
  },
  data() {
    return {
      value: '搜索'
    }
  }
}
</script>
