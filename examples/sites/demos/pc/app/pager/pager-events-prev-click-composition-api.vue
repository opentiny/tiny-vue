<template>
  <tiny-pager
    @prev-click="prevClick"
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

function prevClick(val) {
  Modal.message({
    message: `prev-click 事件，当前页: ${val}`,
    status: 'info'
  })
}
</script>
