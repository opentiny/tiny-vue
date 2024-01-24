<template>
  <div class="demo-input">
    <tiny-input v-model="inputChange" placeholder="input, change" @input="onInput" @change="onChange"></tiny-input>
    <tiny-input v-model="focusBlur" placeholder="focus, blur" @focus="onFocus" @blur="onBlur"></tiny-input>
    <tiny-input v-model="clearValue" placeholder="clear" clearable @clear="onClear"></tiny-input>
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
      inputChange: '',
      focusBlur: '',
      clearValue: 'clear'
    }
  },
  methods: {
    onChange() {
      Modal.message({ message: 'change 事件触发了', status: 'info' })
    },
    onInput() {
      Modal.message({ message: 'input 事件触发了', status: 'info' })
    },
    onBlur() {
      Modal.message({ message: 'blur 事件触发了', status: 'info' })
    },
    onFocus() {
      Modal.message({ message: 'focus 事件触发了', status: 'info' })
    },
    onClear() {
      Modal.message({ message: 'clear 事件触发了', status: 'info' })
    }
  }
}
</script>

<style scoped>
.demo-input .tiny-input {
  width: 250px;
  margin: 5px;
}
</style>
