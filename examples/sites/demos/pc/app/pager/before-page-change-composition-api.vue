<template>
  <tiny-pager
    is-before-page-change
    mode="number"
    :total="200"
    :current-page="currentPage"
    @update:current-page="currentPage = $event"
    @before-page-change="onBeforePageChange"
  >
  </tiny-pager>
</template>

<script setup>
import { ref } from 'vue'
import { Pager as TinyPager, Modal } from '@opentiny/vue'

const currentPage = ref(5)

function onBeforePageChange(param) {
  const { callback, rollback } = param
  Modal.confirm('您确定要放弃当前页的修改吗？').then((res) => {
    if (res === 'confirm') {
      callback && callback()
    } else {
      rollback && rollback()
    }
  })
}
</script>
