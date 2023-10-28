<template>
  <div>
    <tiny-pager layout="prev, pager, next" :total="50"></tiny-pager>

    <tiny-pager align="center" layout="prev, pager, next" :total="100"></tiny-pager>
  </div>
</template>

<script setup lang="jsx">
import { Pager as TinyPager } from '@opentiny/vue'
</script>
