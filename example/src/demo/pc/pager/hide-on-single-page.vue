<template>
  <div>
    <tiny-pager
      hide-on-single-page
      layout="prev, pager, next"
      :total="1"
    ></tiny-pager>
    <tiny-pager layout="prev, pager, next" :total="1"></tiny-pager>
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
