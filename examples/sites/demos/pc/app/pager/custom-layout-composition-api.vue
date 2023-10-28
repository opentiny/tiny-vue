<template>
  <tiny-pager layout="sizes,slot, prev, pager, next, jumper, ->, total" :total="1000">
    <template #default>
      <span>我是插槽</span>
    </template>
  </tiny-pager>
</template>

<script setup lang="jsx">
import { Pager as TinyPager } from '@opentiny/vue'
</script>
