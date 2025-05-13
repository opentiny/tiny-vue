<template>
  <div class="mb-5">
    <tiny-pager mode="number" :total="total" :custom-total="true"></tiny-pager>
  </div>
</template>

<script>
import { TinyPager } from '@opentiny/vue'

export default {
  components: {
    TinyPager
  },
  data() {
    return {
      total: 1000000
    }
  },
  created() {}
}
</script>
