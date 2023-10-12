<template>
  <tiny-pager
    is-before-page-change
    @before-page-change="onBeforePageChange"
    :current-page="currentPage"
    @update:current-page="currentPage = $event"
    :page-size="100"
    layout="total, sizes, prev, pager, next, jumper"
    :total="1000"
  >
  </tiny-pager>
</template>

<script setup lang="jsx">
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
