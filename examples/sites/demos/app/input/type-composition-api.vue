<template>
  <div class="demo-input">
    <tiny-input v-model="text" placeholder="text"></tiny-input>
    <tiny-input type="password" v-model="password" placeholder="password"></tiny-input>
    <tiny-input type="textarea" v-model="textarea" placeholder="textarea"></tiny-input>
    <tiny-input type="email" v-model="email" placeholder="email"></tiny-input>
    <tiny-input type="number" v-model="number" placeholder="number"></tiny-input>
    <tiny-input type="tel" v-model="tel" placeholder="tel"></tiny-input>
    <tiny-input type="url" v-model="url" placeholder="url"></tiny-input>
    <tiny-input type="hidden"></tiny-input>
    <tiny-input type="color" v-model="color"></tiny-input>
    <tiny-input type="date" v-model="date"></tiny-input>
    <tiny-input type="month" v-model="month"></tiny-input>
    <tiny-input type="week" v-model="week"></tiny-input>
    <tiny-input type="datetime-local" v-model="datetime"></tiny-input>
    <tiny-input type="time" v-model="time"></tiny-input>
    <tiny-input type="file" v-model="file"></tiny-input>
    <tiny-input type="range" v-model="range"></tiny-input>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Input as TinyInput } from '@opentiny/vue'

const text = ref('')
const password = ref('')
const textarea = ref('')
const email = ref('')
const number = ref('')
const tel = ref('')
const url = ref('')
const color = ref('#000000')
const date = ref('')
const month = ref('')
const week = ref('')
const datetime = ref('')
const time = ref('')
const file = ref('')
const range = ref('')

</script>

<style scoped>
.demo-input .tiny-input {
  width: 250px;
  margin: 5px;
}

.demo-input .tiny-textarea {
  width: 250px;
  margin: 5px;
}
</style>
