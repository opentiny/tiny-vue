<template>
  <tiny-pager
    @prev-click="prevClick"
    @next-click="nextClick"
    :current-page="currentPage"
    @update:current-page="currentPage = $event"
    :total="100"
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
    prevClick(val) {
      Modal.message({
        message: `prev-click 事件，当前页: ${val}`
      })
    },
    nextClick(val) {
      Modal.message({
        message: `next-click 事件，当前页: ${val}`
      })
    }
  }
}
</script>
