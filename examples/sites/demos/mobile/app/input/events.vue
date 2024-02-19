<template>
  <div class="demo-input-events">
    <tiny-input v-model="inputValue" placeholder="input" @input="onInput"></tiny-input>
    <tiny-input v-model="inputChange" placeholder="change" @change="onChange"></tiny-input>
    <tiny-input v-model="focusBlur" placeholder="focus, blur" @focus="onFocus" @blur="onBlur"></tiny-input>
    <tiny-input v-model="clearValue" placeholder="cleared" clearable @clear="onClear"></tiny-input>
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
      inputValue: '',
      inputChange: '',
      focusBlur: '',
      clearValue: 'clear event'
    }
  },
  methods: {
    onChange() {
      Modal.message('change')
    },
    onInput() {
      Modal.message('input')
    },
    onBlur() {
      Modal.message('blur')
    },
    onFocus() {
      Modal.message('focus')
    },
    onClear() {
      Modal.message('clear')
    }
  }
}
</script>

<style scoped>
.demo-input-events {
  height: 100%;
  padding: 20px 16px;
  background: #f5f5f5;
}

.demo-input-events [class^='tiny'] {
  margin-bottom: 16px;
}
</style>
