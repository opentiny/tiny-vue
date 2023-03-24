<template>
  <div class="content">
    <tiny-pager mode="simple" :total="100"></tiny-pager>
  </div>
</template>

<script lang="jsx">
import { Pager } from '@opentiny/vue'

export default {
  components: {
    TinyPager: Pager
  }
}
</script>

<style scoped>
.content {
  margin-bottom: 20px;
}
</style>
