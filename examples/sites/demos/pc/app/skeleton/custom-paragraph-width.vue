<template>
  <div>
    <tiny-skeleton :rows="5" :rows-width="['200px', '100px', '50px']"></tiny-skeleton>
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
