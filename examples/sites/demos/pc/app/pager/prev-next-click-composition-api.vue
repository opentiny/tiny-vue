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

<script setup>
import { ref } from 'vue'
import { Pager as TinyPager, Modal } from '@opentiny/vue'

const currentPage = ref(5)

function prevClick(val) {
  Modal.message({
    message: `prev-click 事件，当前页: ${val}`
  })
}

function nextClick(val) {
  Modal.message({
    message: `next-click 事件，当前页: ${val}`
  })
}
</script>
