<template>
  <div class="demo-input">
    <tiny-input v-model="input" placeholder="请输入内容" @change="change"></tiny-input>
  </div>
</template>

<script lang="jsx">
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
    change() {
      Modal.message('change')
    }
  }
}
</script>

<style scoped>
.demo-input .tiny-input {
  width: 250px;
}
</style>
