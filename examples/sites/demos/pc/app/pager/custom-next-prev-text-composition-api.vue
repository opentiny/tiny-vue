<template>
  <tiny-pager layout="prev, pager, next" prev-text="上一页" next-text="下一页" :total="100"></tiny-pager>
</template>

<script setup>
import { Pager as TinyPager } from '@opentiny/vue'
</script>
