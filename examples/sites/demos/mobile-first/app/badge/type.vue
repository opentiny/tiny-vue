<template>
  <tiny-badge :value="value1"> 默认类型 </tiny-badge>
</template>

<script>
import { TinyBadge } from '@opentiny/vue'

export default {
  components: {
    TinyBadge
  },
  data() {
    return {
      value1: 2
    }
  }
}
</script>
