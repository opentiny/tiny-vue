<template>
  <div class="badge-wrap">
    <tiny-badge :value="value1" :max="1" is-mini>小尺寸</tiny-badge>
    <br />
    <br />
    <tiny-badge :value="value1" :max="1">默认尺寸</tiny-badge>
  </div>
</template>

<script lang="jsx">
import { Badge } from '@opentiny/vue'

export default {
  components: {
    TinyBadge: Badge,
  },
  data() {
    return {
      value1: 2,
    }
  },
}
</script>

<style>
.badge-wrap {
  padding: 20px;
}
</style>
