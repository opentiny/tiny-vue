<template>
  <tiny-pager layout="total, sizes, prev, pager, next, slot, jumper" :total="1000">
    <template #default>
      <span>默认插槽</span>
    </template>
  </tiny-pager>
  <tiny-pager layout="sizes, prev, current, next, total" :total="1000"></tiny-pager>
</template>

<script>
import { Pager } from '@opentiny/vue'

export default {
  components: {
    TinyPager: Pager
  }
}
</script>
