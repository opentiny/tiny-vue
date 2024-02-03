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
  fill: #8994aa;
  margin: 20px 50px;
  font-size: 24px;
}
</style>
