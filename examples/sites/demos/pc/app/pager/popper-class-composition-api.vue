<template>
  <tiny-pager popper-class="custom-pager" layout="sizes,prev, pager, next" :total="50"></tiny-pager>
</template>

<script setup>
import { TinyPager } from '@opentiny/vue'
</script>

<style>
.custom-pager.tiny-popper {
  background: #e6f7ff;
}
</style>
