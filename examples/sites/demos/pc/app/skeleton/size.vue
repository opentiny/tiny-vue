<template>
  <tiny-skeleton>
    <template #placeholder>
      <br /><br />
      <tiny-skeleton-item variant="image" size="small"></tiny-skeleton-item>
      <br /><br />
      <tiny-skeleton-item variant="image" size="medium"></tiny-skeleton-item>
      <br /><br />
      <tiny-skeleton-item variant="image" size="large"></tiny-skeleton-item>
    </template>
  </tiny-skeleton>
</template>

<script>
import { Skeleton, SkeletonItem } from '@opentiny/vue'

export default {
  components: {
    TinySkeleton: Skeleton,
    TinySkeletonItem: SkeletonItem
  }
}
</script>
