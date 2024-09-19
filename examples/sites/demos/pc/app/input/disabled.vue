<template>
  <div class="demo-input">
    <tiny-input v-model="input" disabled placeholder="input"></tiny-input>
    <tiny-input type="textarea" disabled v-model="input" placeholder="textarea"></tiny-input>
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
.demo-input {
  width: 300px;
}

.demo-input > div {
  margin-top: 10px;
}
</style>
