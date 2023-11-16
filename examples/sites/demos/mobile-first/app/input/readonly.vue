<template>
  <div class="demo-input">
    <tiny-input readonly></tiny-input>
  </div>
</template>

<script>
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
