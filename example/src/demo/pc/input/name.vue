<template>
  <div class="demo-input">
    <p>设置name</p>
    <tiny-input v-model="input" name="inputName"></tiny-input>
    <p>设置disabled</p>
    <tiny-input v-model="input" disabled></tiny-input>
    <br />
    <p>设置readonly</p>
    <tiny-input v-model="input" readonly></tiny-input>
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
