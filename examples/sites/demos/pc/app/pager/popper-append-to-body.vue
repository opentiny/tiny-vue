<template>
  <tiny-pager :popper-append-to-body="false" layout="sizes,prev, pager, next" :total="50"></tiny-pager>
</template>

<script>
import { TinyPager } from '@opentiny/vue'

export default {
  components: {
    TinyPager
  }
}
</script>
