<template>
  <div class="process-designer-demo-wrapper">
    <process-designer />
  </div>
</template>

<script lang="ts">
import { ProcessDesigner } from '@opentiny/vue'

export default {
  components: { ProcessDesigner },
  setup() {
    return {}
  }
}
</script>

<style>
.process-designer-demo-wrapper {
  width: 100%;
  height: 500px;
}
</style>
