<template>
  <tiny-pager layout="prev, pager, next" :total="200" :pager-count="15"></tiny-pager>
</template>

<script lang="jsx">
import { Pager } from '@opentiny/vue'

export default {
  components: {
    TinyPager: Pager
  }
}
</script>
