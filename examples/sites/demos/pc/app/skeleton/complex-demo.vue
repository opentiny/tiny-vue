<template>
  <div>
    <tiny-skeleton avatar></tiny-skeleton>
  </div>
</template>

<script>
import { Skeleton } from '@opentiny/vue'

export default {
  components: {
    TinySkeleton: Skeleton
  }
}
</script>
