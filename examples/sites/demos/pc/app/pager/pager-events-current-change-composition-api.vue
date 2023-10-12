<template>
  <tiny-pager
    @current-change="handleCurrentChange"
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

function handleCurrentChange(val) {
  Modal.message({
    message: `current-change 事件，当前页: ${val}`,
    status: 'info'
  })
}
</script>
