<template>
  <tiny-scroll-text class="scrollclass"></tiny-scroll-text>
</template>

<script lang="jsx">
import { ScrollText } from '@opentiny/vue'

export default {
  components: {
    TinyScrollText: ScrollText
  }
}
</script>

<style scoped>
.scrollclass {
  background-color: red;
}
</style>
