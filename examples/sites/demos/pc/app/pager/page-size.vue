<template>
  <tiny-pager mode="number" :page-size="20" :page-sizes="[10, 20, 50, 100]" :total="100"> </tiny-pager>
</template>

<script>
import { TinyPager } from '@opentiny/vue'

export default {
  components: {
    TinyPager
  }
}
</script>
