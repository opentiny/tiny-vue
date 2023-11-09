<template>
  <div>
    <tiny-pager :total="50"></tiny-pager>
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
