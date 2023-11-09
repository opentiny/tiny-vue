<template>
  <div>
    <tiny-badge :value="2" href="/" target="_self">当前标签打开</tiny-badge>
    <br />
    <tiny-badge :value="2" href="/" target="_blank">新建标签打开</tiny-badge>
  </div>
</template>

<script>
import { Badge } from '@opentiny/vue'

export default {
  components: {
    TinyBadge: Badge
  }
}
</script>
