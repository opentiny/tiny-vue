<template>
  <div>
    <tiny-skeleton :rows="4"></tiny-skeleton>
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
