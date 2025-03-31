<template>
  <div>
    <tiny-skeleton :rows-width="['200px', '100px', '50px']"></tiny-skeleton>
  </div>
</template>

<script>
import { TinySkeleton } from '@opentiny/vue'

export default {
  components: {
    TinySkeleton
  }
}
</script>
