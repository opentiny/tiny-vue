<template>
  <div class="mb-5">
    <tiny-pager mode="number" :total="100"></tiny-pager>
  </div>
</template>

<script>
import { TinyPager } from '@opentiny/vue'

export default {
  components: {
    TinyPager
  }
}
</script>
