<template>
  <div class="demo-input">
    <tiny-input
      ref="input"
      v-model="input"
      placeholder="请输入内容"
    ></tiny-input>
    <br />
    <br />
    <tiny-button @click="click">选中输入框内容</tiny-button>
  </div>
</template>

<script>
import { Input, Button } from '@opentiny/vue'

export default {
  components: {
    TinyInput: Input,
    TinyButton: Button
  },
  data() {
    return {
      input: ''
    }
  },
  methods: {
    click() {
      this.$refs.input.select()
    }
  }
}
</script>

<style scoped>
.demo-input .tiny-input {
  width: 250px;
}
</style>
