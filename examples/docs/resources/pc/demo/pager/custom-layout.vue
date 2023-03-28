<template>
  <tiny-pager layout="sizes,slot, prev, pager, next, jumper, ->, total" :total="1000">
    <template #default>
      <span>我是插槽</span>
    </template>
  </tiny-pager>
</template>

<script lang="jsx">
import { Pager } from '@opentiny/vue'

export default {
  components: {
    TinyPager: Pager
  }
}
</script>
