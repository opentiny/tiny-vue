<template>
  <div class="badge-wrap">
    <tiny-badge :value="value1" is-dot> 小圆点标记 </tiny-badge>
  </div>
</template>

<script lang="jsx">
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
