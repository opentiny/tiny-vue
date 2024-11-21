<template>
  <tiny-pager mode="number" :page-size="5" :page-sizes="[5, 7, 10, 20, 50]" :total="100"> </tiny-pager>
</template>

<script>
import { TinyPager, TinyModal } from '@opentiny/vue'

export default {
  components: {
    TinyPager
  }
}
</script>
