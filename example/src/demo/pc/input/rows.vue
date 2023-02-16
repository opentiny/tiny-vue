<template>
  <div class="demo-input">
    <tiny-input
      type="textarea"
      v-model="input"
      placeholder="rows 为默认"
    ></tiny-input>
    <br />
    <br />
    <tiny-input
      type="textarea"
      v-model="input"
      :rows="1"
      placeholder="rows 为 1"
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
.demo-input .tiny-textarea {
  width: 400px;
}
</style>
