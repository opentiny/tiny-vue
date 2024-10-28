<template>
  <div class="demo-input">
    <tiny-input v-model="text" placeholder="请输入内容" @input="input"></tiny-input>
  </div>
</template>

<script>
import { TinyInput, TinyModal } from '@opentiny/vue'

export default {
  components: {
    TinyInput
  },
  data() {
    return {
      text: ''
    }
  },
  methods: {
    input() {
      TinyModal.message('input')
    }
  }
}
</script>

<style scoped>
.demo-input .tiny-input {
  width: 250px;
}
</style>
