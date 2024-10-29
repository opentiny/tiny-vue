<template>
  <div class="demo-input">
    <tiny-input v-model="inputChange" placeholder="input, change" @input="onInput" @change="onChange"></tiny-input>
    <tiny-input v-model="focusBlur" placeholder="focus, blur" @focus="onFocus" @blur="onBlur"></tiny-input>
    <tiny-input v-model="clearValue" placeholder="clear" clearable @clear="onClear"></tiny-input>
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
      inputChange: '',
      focusBlur: '',
      clearValue: 'clear'
    }
  },
  methods: {
    onChange() {
      TinyModal.message({ message: 'change 事件触发了', status: 'info' })
    },
    onInput() {
      TinyModal.message({ message: 'input 事件触发了', status: 'info' })
    },
    onBlur() {
      TinyModal.message({ message: 'blur 事件触发了', status: 'info' })
    },
    onFocus() {
      TinyModal.message({ message: 'focus 事件触发了', status: 'info' })
    },
    onClear() {
      TinyModal.message({ message: 'clear 事件触发了', status: 'info' })
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
