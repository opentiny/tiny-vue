<template>
  <div>
    <tiny-skeleton>
      <template #placeholder>
        <tiny-skeleton-item variant="square"></tiny-skeleton-item>
        <br />
        <tiny-skeleton-item variant="image"></tiny-skeleton-item>
        <br /><br />
        <tiny-skeleton-item variant="circle"></tiny-skeleton-item>
      </template>
    </tiny-skeleton>
  </div>
</template>

<script setup>
import { Skeleton as TinySkeleton, SkeletonItem as TinySkeletonItem } from '@opentiny/vue'
</script>
