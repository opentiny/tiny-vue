<template>
  <tiny-pager
    @size-change="handleSizeChange"
    :current-page="currentPage"
    @update:current-page="currentPage = $event"
    :page-size="100"
    layout="sizes, total, prev, pager, next"
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
    handleSizeChange(val) {
      Modal.message({
        message: `size-change 事件，每页 ${val} 条`,
        status: 'info'
      })
    }
  }
}
</script>
