<template>
  <div class="demo-input">
    <tiny-input v-model="input" disabled :placeholder="placeholder"></tiny-input>
    <br />
    <tiny-input v-model="text" type="textarea" disabled></tiny-input>
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
      text: '已输入值',
      placeholder: '请输入内容'
    }
  }
}
</script>

<style scoped>
.demo-input {
  padding: 20px;
  height: 100%;
}
</style>
