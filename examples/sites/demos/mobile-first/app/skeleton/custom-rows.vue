<template>
  <div>
    <tiny-skeleton :rows="0" :animated="false"></tiny-skeleton>
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
