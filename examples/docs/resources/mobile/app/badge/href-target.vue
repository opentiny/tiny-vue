<template>
  <div class="badge-wrap">
    <tiny-badge :value="2" href="/" target="_self">当前标签页打开</tiny-badge>
    <br />
    <br />
    <tiny-badge :value="2" href="/" target="_blank">新建标签页打开</tiny-badge>
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
