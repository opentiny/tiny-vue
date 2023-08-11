<template>
  <div class="content">
    <tiny-pager mode="number" :total="100" layout="total,sizes,prev,pager,next" disabled />
    <tiny-pager mode="number" :total="100" layout="total,sizes,prev,pager,next" size="mini" disabled />
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
