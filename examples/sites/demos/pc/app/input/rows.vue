<template>
  <div class="demo-input">
    <tiny-input type="textarea" v-model="input" placeholder="default"></tiny-input>
    <tiny-input type="textarea" v-model="input" :rows="1" placeholder="rows = 1"></tiny-input>
    <tiny-input type="textarea" v-model="input" :cols="100" placeholder="cols = 100"></tiny-input>
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
  width: auto;
  max-width: 100%;
  margin: 5px;
}
</style>
