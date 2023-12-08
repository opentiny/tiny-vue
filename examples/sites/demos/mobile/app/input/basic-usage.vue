<template>
  <div class="demo-input">
    <tiny-input v-model="input" :placeholder="placeholder"></tiny-input>
    <br />
    <tiny-input v-model="textareaVal" type="textarea" placeholder="用作文本框"></tiny-input>
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
      input: '',
      textareaVal: '',
      placeholder: '请输入内容'
    }
  }
}
</script>

<style scoped>
.demo-input {
  padding: 20px 16px;
  height: 100%;
  background: #f5f5f5;
}
</style>
