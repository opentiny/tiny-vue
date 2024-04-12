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

<script setup>
import { Skeleton as TinySkeleton, SkeletonItem as TinySkeletonItem } from '@opentiny/vue'
</script>
