<template>
  <div class="demo-input-events">
    <tiny-input v-model="inputValue" placeholder="input" @input="onInput"></tiny-input>
    <tiny-input v-model="inputChange" placeholder="change" @change="onChange"></tiny-input>
    <tiny-input v-model="focusBlur" placeholder="focus, blur" @focus="onFocus" @blur="onBlur"></tiny-input>
    <tiny-input v-model="clearValue" placeholder="cleared" clearable @clear="onClear"></tiny-input>
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
      inputValue: '',
      inputChange: '',
      focusBlur: '',
      clearValue: 'clear event'
    }
  },
  methods: {
    onChange() {
      TinyModal.message('change')
    },
    onInput() {
      TinyModal.message('input')
    },
    onBlur() {
      TinyModal.message('blur')
    },
    onFocus() {
      TinyModal.message('focus')
    },
    onClear() {
      TinyModal.message('clear')
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
