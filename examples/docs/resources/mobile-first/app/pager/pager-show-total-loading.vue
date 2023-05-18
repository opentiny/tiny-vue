<template>
  <div class="content">
    <tiny-pager mode="number" :total="total" :show-total-loading="showTotalLoading"></tiny-pager>
  </div>
</template>

<script>
import { Pager } from '@opentiny/vue'

export default {
  components: {
    TinyPager: Pager
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

<style scoped>
.content {
  margin-bottom: 20px;
}
</style>
