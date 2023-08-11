<template>
  <tiny-badge :value="500" :max="99"> 最大值显示 </tiny-badge>
</template>

<script>
import { Badge } from '@opentiny/vue'

export default {
  components: {
    TinyBadge: Badge
  }
}
</script>
