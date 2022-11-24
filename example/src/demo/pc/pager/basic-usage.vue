<template>
  <div>
    <tiny-pager layout="prev, pager, next" :total="50"></tiny-pager>

    <tiny-pager layout="prev, pager, next" :total="100"></tiny-pager>
  </div>
</template>

<script>
import { Pager } from '@opentiny/vue'

export default {
  components: {
    TinyPager: Pager
  }
}
</script>
