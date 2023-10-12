<template>
  <div class="demo-input">
    <div>
      <tiny-button @click="blur">blur</tiny-button>
      <tiny-button @click="focus">focus</tiny-button>
      <tiny-input ref="inputRefRef" v-model="input" placeholder="Please input"></tiny-input>
    </div>
    <div>
      <tiny-button @click="select">select</tiny-button>
      <tiny-input ref="selectRefRef" v-model="selectValue" placeholder="Please input"></tiny-input>
    </div>
  </div>
</template>
  
<script setup>
import { ref } from 'vue'
import { Input as TinyInput, Button as TinyButton } from '@opentiny/vue'

const input = ref('')
const selectValue = ref('123456')
const selectRefRef = ref()
const inputRefRef = ref()

function select() {
  selectRefRef.value.select()
}

function blur() {
  inputRefRef.value.blur()
}

function focus() {
  inputRefRef.value.focus()
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
