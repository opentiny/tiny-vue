<template>
  <tiny-pager layout="prev, pager, next" :page-count="200"></tiny-pager>
</template>

<script lang="jsx">
import { Pager } from '@opentiny/vue'

export default {
  components: {
    TinyPager: Pager
  }
}
</script>
