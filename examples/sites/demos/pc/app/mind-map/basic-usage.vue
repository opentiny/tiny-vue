<template>
  <tiny-mind-map class="demo-mind-map-basic" />
</template>

<script>
import { MindMap } from '@opentiny/vue'

export default {
  components: {
    TinyMindMap: MindMap
  }
}
</script>

<style scoped>
.demo-mind-map-basic {
  width: 100%;
  height: 400px;
}
</style>
