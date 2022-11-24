<template>
  <tiny-pager
    layout="sizes, total, slot, prev, pager, next, jumper"
    :total="1000"
  >
    <template #default>
      <span class="custom-content">我是插槽</span>
    </template>
  </tiny-pager>
</template>

<script>
import { Pager } from '@opentiny/vue'

export default {
  components: {
    TinyPager: Pager
  }
}
</script>

<style>
.custom-content {
  margin: 0 10px;
}
</style>
