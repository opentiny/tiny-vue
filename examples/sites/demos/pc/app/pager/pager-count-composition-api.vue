<template>
  <tiny-pager layout="prev, pager, next" :total="200" :pager-count="15"></tiny-pager>
</template>

<script setup>
import { Pager as TinyPager } from '@opentiny/vue'
</script>
