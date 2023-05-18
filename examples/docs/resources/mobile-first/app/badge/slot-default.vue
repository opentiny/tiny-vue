<template>
  <tiny-badge :value="2">
    <template #default>
      <span style="color: red">自定义默认插槽</span>
    </template>
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
