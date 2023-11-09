<template>
  <tiny-pager
    mode="number"
    :page-size="5"
    :page-sizes="[5, 7, 10, 20, 50]"
    :total="100"
    @size-change="handleSizeChange"
  >
  </tiny-pager>
</template>

<script setup>
import { Pager as TinyPager, Modal } from '@opentiny/vue'

function handleSizeChange(val) {
  Modal.message({
    message: `size-change 事件，每页 ${val} 条`
  })
}
</script>
