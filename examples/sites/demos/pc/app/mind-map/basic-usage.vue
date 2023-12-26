<template>
  <tiny-mind-map class="mindmap" />
</template>

<script lang="ts">
import { MindMap } from '@opentiny/vue'

export default {
  components: {
    TinyMindMap: MindMap
  }
}
</script>

<style scoped>
.mindmap {
  width: 100%;
  height: 300px;
}
</style>
