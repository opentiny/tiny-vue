<template>
  <div class="mb-5">
    <tiny-pager mode="number" :total="total" :show-total-loading="showTotalLoading"></tiny-pager>
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
      total: 0,
      showTotalLoading: true
    }
  },
  created() {
    setTimeout(() => {
      this.total = 1000
      this.showTotalLoading = false
    }, 2000)
  }
}
</script>
