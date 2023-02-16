<template>
  <tiny-scroll-text class="scrollclass"></tiny-scroll-text>
</template>

<script>
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
