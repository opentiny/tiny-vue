<template>
  <div title="复制" class="icon-demo">
    <icon-copy class="tiny-svg-size icon-copy"></icon-copy>
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
.icon-demo .tiny-svg-size {
  fill: #8994aa;
  margin: 20px 50px;
}

.icon-demo .icon-copy {
  font-size: 1.8em;
}
</style>
