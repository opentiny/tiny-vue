<template>
  <div class="icon-demo">
    <div title="可见提示">
      <tiny-icon-copy></tiny-icon-copy>
    </div>

    <tiny-icon-copy title="不可见提示"></tiny-icon-copy>
  </div>
</template>

<script lang="jsx">
import { IconCopy } from '@opentiny/vue-icon'

export default {
  components: {
    TinyIconCopy: IconCopy()
  }
}
</script>

<style scoped>
.icon-demo {
  display: flex;
}
.icon-demo .tiny-svg {
  margin: 20px 40px;
  font-size: 24px;
  fill: var(--tv-color-icon-control);
  color: var(--tv-color-icon-control);
}
</style>
