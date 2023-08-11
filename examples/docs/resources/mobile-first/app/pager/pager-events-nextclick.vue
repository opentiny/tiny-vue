<template>
  <tiny-pager
    @next-click="nextClick"
    :current-page="currentPage"
    @update:current-page="currentPage = $event"
    :page-size="100"
    layout="total, sizes, prev, pager, next"
    :total="1000"
  >
  </tiny-pager>
</template>

<script>
import { Pager, Modal } from '@opentiny/vue'

export default {
  components: {
    TinyPager: Pager
  },
  data() {
    return {
      currentPage: 5
    }
  },
  methods: {
    nextClick(val) {
      Modal.message({
        message: `next-click 事件，当前页: ${val}`,
        status: 'info'
      })
    }
  }
}
</script>
