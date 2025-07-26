<template>
  <tiny-pager popper-class="custom-pager" layout="sizes,prev, pager, next" :total="50"></tiny-pager>
</template>

<script>
import { TinyPager } from '@opentiny/vue'

export default {
  components: {
    TinyPager
  }
}
</script>

<style>
.custom-pager.tiny-popper {
  background: #e6f7ff;
}
</style>
