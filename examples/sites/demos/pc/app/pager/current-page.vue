<template>
  <tiny-pager :current-page="2" :total="50"></tiny-pager>
</template>

<script>
import { Pager } from '@opentiny/vue'

export default {
  components: {
    TinyPager: Pager
  }
}
</script>
