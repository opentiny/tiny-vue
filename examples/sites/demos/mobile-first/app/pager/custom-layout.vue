<template>
  <tiny-pager layout="sizes,slot, prev, pager, next, jumper, ->, total" :total="1000">
    <template #default>
      <span class="text-xs">我是插槽</span>
    </template>
  </tiny-pager>
</template>

<script>
import { TinyPager } from '@opentiny/vue'

export default {
  components: {
    TinyPager
  }
}
</script>
