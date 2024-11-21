<template>
  <div class="demo-input">
    <tiny-form id="tinyForm"></tiny-form>
    <tiny-input v-model="input" form="tinyForm"></tiny-input>
  </div>
</template>

<script>
import { TinyInput, TinyForm } from '@opentiny/vue'

export default {
  components: {
    TinyForm,
    TinyInput
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
