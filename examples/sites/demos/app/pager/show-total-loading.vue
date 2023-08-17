<template>
  <tiny-button @click="setTotalLoading" type="primary">改变总页数加载状态</tiny-button>
  <tiny-pager
    :current-page="currentPage"
    @update:current-page="currentPage = $event"
    :page-size="10"
    layout="total, sizes, prev, pager, next"
    :total="100"
    :show-total-loading="totalLoading"
  >
  </tiny-pager>
</template>

<script>
import { Pager, Button } from '@opentiny/vue'

export default {
  components: {
    TinyPager: Pager,
    TinyButton: Button
  },
  data() {
    return {
      currentPage: 5,
      totalLoading: true
    }
  },
  methods: {
    setTotalLoading() {
      this.totalLoading = !this.totalLoading
    }
  }
}
</script>
