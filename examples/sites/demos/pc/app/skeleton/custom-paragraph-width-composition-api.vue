<template>
  <div>
    <tiny-skeleton :rows="5" :rows-width="['200px', '100px', '50px']"></tiny-skeleton>
  </div>
</template>

<script setup>
import { Skeleton as TinySkeleton } from '@opentiny/vue'
</script>
