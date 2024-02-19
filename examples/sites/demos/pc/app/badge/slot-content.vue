<template>
  <tiny-badge :value="2">
    自定义内容插槽
    <template #content>自定义</template>
  </tiny-badge>
</template>

<script>
import { Badge } from '@opentiny/vue'

export default {
  components: {
    TinyBadge: Badge
  }
}
</script>

<style scoped>
.tiny-badge {
  border-radius: 22px;
}
</style>
