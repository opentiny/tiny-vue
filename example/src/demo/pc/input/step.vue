<template>
  <div class="demo-input">
    <tiny-input
      type="number"
      v-model="input"
      :step="2"
      placeholder="step 为 2"
    ></tiny-input>
  </div>
</template>

<script>
import { Input } from '@opentiny/vue'

export default {
  components: {
    TinyInput: Input
  },
  data() {
    return {
      input: ''
    }
  }
}
</script>

<style scoped>
.demo-input .tiny-input {
  width: 250px;
}
</style>
