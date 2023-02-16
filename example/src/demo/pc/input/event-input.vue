<template>
  <div class="demo-input">
    <tiny-input
      v-model="text"
      placeholder="请输入内容"
      @input="input"
    ></tiny-input>
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
      text: ''
    }
  },
  methods: {
    input() {
      Modal.message('input')
    }
  }
}
</script>

<style scoped>
.demo-input .tiny-input {
  width: 250px;
}
</style>
