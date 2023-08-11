<template>
  <div class="demo-input">
    <tiny-form id="tinyForm"></tiny-form>
    <tiny-input v-model="input" form="tinyForm"></tiny-input>
  </div>
</template>

<script lang="jsx">
import { Input, Form } from '@opentiny/vue'

export default {
  components: {
    TinyForm: Form,
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
