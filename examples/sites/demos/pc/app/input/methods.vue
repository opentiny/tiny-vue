<template>
  <div class="demo-input">
    <div>
      <tiny-button @click="blur">blur</tiny-button>
      <tiny-button @click="focus">focus</tiny-button>
      <tiny-input ref="inputRef" v-model="input" placeholder="Please input"></tiny-input>
    </div>
    <div>
      <tiny-button @click="select">select</tiny-button>
      <tiny-input ref="selectRef" v-model="selectValue" placeholder="Please input"></tiny-input>
    </div>
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
      input: '',
      selectValue: '123456'
    }
  },
  methods: {
    select() {
      this.$refs.selectRef.select()
    },
    blur() {
      this.$refs.inputRef.blur()
    },
    focus() {
      this.$refs.inputRef.focus()
    }
  }
}
</script>

<style scoped>
.demo-input .tiny-input {
  width: 250px;
  margin: 5px;
}
.demo-input > * {
  margin: 5px;
}
</style>
