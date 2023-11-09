<template>
  <tiny-pager
    popper-class="custom-pager"
    layout="sizes,prev, pager, next"
    :page-size="5"
    :page-sizes="[5, 10, 20, 30, 40, 50, 100]"
    :total="50"
  ></tiny-pager>
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
.custom-pager.tiny-popper {
  background: #fff3b7;
}
</style>
