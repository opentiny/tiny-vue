<template>
  <tiny-pager layout="prev, pager, next" :current-page="2" :total="50"></tiny-pager>
</template>

<script setup lang="jsx">
import { Pager as TinyPager } from '@opentiny/vue'
</script>
