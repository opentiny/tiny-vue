<template>
  <div class="demo-input">
    <tiny-input disabled></tiny-input>
  </div>
</template>

<script lang="jsx">
import { Input } from '@opentiny/vue'

export default {
  components: {
    TinyInput: Input
  }
}
</script>

<style scoped>
.demo-input .tiny-input {
  width: 250px;
}
</style>
