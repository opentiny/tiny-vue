<template>
  <tiny-button @click="setTotalLoading" type="primary">改变总页数加载状态</tiny-button>
  <tiny-pager
    :current-page="currentPage"
    @update:current-page="currentPage = $event"
    :page-size="10"
    layout="total, sizes, prev, pager, next"
    :total="100"
    :show-total-loading="totalLoading"
  >
  </tiny-pager>
</template>

<script setup>
import { ref } from 'vue'
import { Pager as TinyPager, Button as TinyButton } from '@opentiny/vue'

const currentPage = ref(5)
const totalLoading = ref(true)

function setTotalLoading() {
  totalLoading.value = !totalLoading.value
}
</script>
