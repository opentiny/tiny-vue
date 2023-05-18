<template>
  <tiny-pager @current-change="handleCurrentChange" :current-page="currentPage" @update:current-page="currentPage = $event" :page-size="100" layout="total, sizes, prev, pager, next" :total="1000">
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
    handleCurrentChange(val) {
      Modal.message({
        message: `current-change 事件，当前页: ${val}`,
        status: 'info'
      })
    }
  }
}
</script>
