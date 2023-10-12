<template>
  <tiny-badge :value="2">我的待办</tiny-badge>
</template>

<script lang="jsx">
import { Badge } from '@opentiny/vue'

export default {
  components: {
    TinyBadge: Badge
  }
}
</script>
