<template>
  <div class="content">
    <tiny-pager mode="number" :total="total" :custom-total="true"></tiny-pager>
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
      total: 1000000
    }
  },
  created() { }
}
</script>

<style scoped>
.content {
  margin-bottom: 20px;
}
</style>
