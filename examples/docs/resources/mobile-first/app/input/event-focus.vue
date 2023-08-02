<template>
  <div class="demo-input">
    <tiny-input v-model="input" placeholder="获取焦点" @focus="focus"></tiny-input>
  </div>
</template>

<script>
import { Input, Modal } from '@opentiny/vue'

export default {
  components: {
    TinyInput: Input
  },
  data() {
    return {
      input: ''
    }
  },
  methods: {
    focus() {
      Modal.message('focus')
    }
  }
}
</script>

<style scoped>
.demo-input .tiny-input {
  width: 250px;
}
</style>
