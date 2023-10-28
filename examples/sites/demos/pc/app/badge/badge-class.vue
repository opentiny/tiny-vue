<template>
  <tiny-badge :value="2" badge-class="custom-badge-class">我的待办</tiny-badge>
</template>

<script>
import { Badge } from '@opentiny/vue'

export default {
  components: {
    TinyBadge: Badge
  }
}
</script>

<style>
.custom-badge-class {
  background-color: #f2f2f3;
  color: #7a7e87;
  font-weight: normal;
}
</style>
