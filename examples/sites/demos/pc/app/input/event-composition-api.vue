<template>
  <div class="demo-input">
    <tiny-input v-model="inputChange" placeholder="input, change" @input="onInput" @change="onChange"></tiny-input>
    <tiny-input v-model="focusBlur" placeholder="focus, blur" @focus="onFocus" @blur="onBlur"></tiny-input>
    <tiny-input v-model="clearValue" placeholder="clear" clearable @clear="onClear"></tiny-input>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Input as TinyInput, Modal } from '@opentiny/vue'

const inputChange = ref('')
const focusBlur = ref('')
const clearValue = ref('clear')

function onChange() {
  Modal.message('change')
}

function onInput() {
  Modal.message('input')
}

function onBlur() {
  Modal.message('blur')
}

function onFocus() {
  Modal.message('focus')
}

function onClear() {
  Modal.message('clear')
}
</script>

<style scoped>
.demo-input .tiny-input {
  width: 250px;
  margin: 5px;
}
</style>
