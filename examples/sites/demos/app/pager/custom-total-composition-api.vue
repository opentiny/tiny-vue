<template>
  <tiny-pager
    :current-page="currentPage"
    @update:current-page="currentPage = $event"
    :page-size="100"
    layout="total, sizes, prev, pager, next"
    :total="5000000"
    :custom-total="true"
  >
  </tiny-pager>
  <tiny-pager
    :current-page="currentPage"
    @update:current-page="currentPage = $event"
    :page-size="100"
    layout="total, sizes, prev, pager, next"
    :total="5000000"
    :custom-total="'条数超出百万'"
  >
  </tiny-pager>
</template>

<script setup>
import { ref } from 'vue'
import { Pager as TinyPager } from '@opentiny/vue'

const currentPage = ref(5)
</script>
