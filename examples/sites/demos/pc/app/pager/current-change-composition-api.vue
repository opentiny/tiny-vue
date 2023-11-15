<template>
  <tiny-pager
    :page-size="100"
    layout="total, sizes, prev, pager, next"
    :total="1000"
    :current-page="currentPage"
    @update:current-page="currentPage = $event"
    @current-change="handleCurrentChange"
  >
  </tiny-pager>
</template>

<script setup>
import { ref } from 'vue'
import { Pager as TinyPager, Modal } from '@opentiny/vue'

const currentPage = ref(5)

function handleCurrentChange(val) {
  Modal.message({
    message: `current-change 事件，当前页: ${val}`,
    status: 'info'
  })
}
</script>
