<template>
  <div class="display-only">
    <p>
      <label>display-only & display-only-content：</label>
      <tiny-input v-model="input" display-only display-only-content="display-only-content 的内容"></tiny-input>
    </p>
    <p>
      <label>display-only：</label>
      <tiny-input v-model="input1" display-only></tiny-input>
    </p>
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
      input: 'value 的内容',
      input1: 'value 的内容'
    }
  }
}
</script>

<style scoped>
.display-only .tiny-input {
  display: inline-block;
  width: auto;
}
</style>
