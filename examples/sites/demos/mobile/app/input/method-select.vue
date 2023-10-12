<template>
  <div class="input-wrap">
    <tiny-button @click="click">选中输入框内容</tiny-button>
    <br /><br />
    <tiny-input ref="input" v-model="input"></tiny-input>
  </div>
</template>

<script lang="jsx">
import { Input, Button } from '@opentiny/vue'

export default {
  components: {
    TinyInput: Input,
    TinyButton: Button
  },
  data() {
    return {
      input: '我是输入框'
    }
  },
  methods: {
    click() {
      this.$refs.input.select()
    }
  }
}
</script>

<style>
.input-wrap {
  padding-top: 20px;
  height: 100%;
  background: #f4f4f4;
}
</style>
