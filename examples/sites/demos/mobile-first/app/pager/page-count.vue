<template>
  <tiny-pager layout="prev, pager, next" :page-count="200"></tiny-pager>
</template>

<script>
import { TinyPager } from '@opentiny/vue'

export default {
  components: {
    TinyPager
  }
}
</script>
