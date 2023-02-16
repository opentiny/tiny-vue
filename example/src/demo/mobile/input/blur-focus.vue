<template>
  <div class="input-wrap">
    <tiny-button @click="focus">获取焦点</tiny-button>
    <tiny-button @click="blur">失去焦点</tiny-button>
    <br /><br />
    <tiny-input ref="input" v-model="input"></tiny-input>
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
    focus() {
      this.$refs.input.focus()
    },
    blur() {
      this.$refs.input.blur()
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
