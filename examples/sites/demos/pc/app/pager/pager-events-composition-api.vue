<template>
  <tiny-pager
    @size-change="handleSizeChange"
    :current-page="currentPage"
    @update:current-page="currentPage = $event"
    :page-size="100"
    layout="total, sizes, prev, pager, next"
    :total="1000"
  >
  </tiny-pager>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Pager as TinyPager, Modal } from '@opentiny/vue'

const currentPage = ref(5)

function handleSizeChange(val) {
  Modal.message({
    message: `size-change 事件，每页 ${val} 条`,
    status: 'info'
  })
}
</script>
