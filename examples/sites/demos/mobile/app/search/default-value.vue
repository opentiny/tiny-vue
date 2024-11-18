<template>
  <tiny-search v-model="value"></tiny-search>
</template>

<script lang="jsx">
import { TinySearch } from '@opentiny/vue'

export default {
  components: {
    TinySearch
  },
  data() {
    return {
      value: '公司'
    }
  }
}
</script>
