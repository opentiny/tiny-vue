<template>
  <div title="复制" class="icon-demo">
    <icon-copy></icon-copy>
  </div>
</template>

<script lang="jsx">
import { IconCopy } from '@opentiny/vue-icon'

export default {
  components: {
    IconCopy: IconCopy()
  }
}
</script>

<style scoped>
.icon-demo .tiny-svg {
  margin: 20px 83px;
  font-size: 24px;
}
</style>
