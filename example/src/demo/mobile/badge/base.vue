<template>
  <div class="badge-wrap">
    <tiny-badge :value="value1" :max="1"> ζηεΎε </tiny-badge>
  </div>
</template>

<script>
import { Badge } from '@opentiny/vue'

export default {
  components: {
    TinyBadge: Badge
  },
  data() {
    return {
      value1: 2
    }
  }
}
</script>
<style>
.badge-wrap {
  padding: 20px;
}
</style>
