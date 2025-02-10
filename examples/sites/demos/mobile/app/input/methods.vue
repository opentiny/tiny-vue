<template>
  <div class="demo-input-methods">
    <section>
      <tiny-button plain @click="focus">focus</tiny-button>
      <tiny-button plain @click="blur">blur</tiny-button>
      <tiny-input ref="inputRefRef" v-model="value" placeholder="Please input"></tiny-input>
    </section>
    <section>
      <tiny-button plain @click="select">select</tiny-button>
      <tiny-input ref="selectRefRef" v-model="selectValue" placeholder="Please input"></tiny-input>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { TinyInput, TinyButton } from '@opentiny/vue-mobile'

const value = ref('')
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
.demo-input-methods {
  height: 100%;
  padding: 20px 16px;
  background: #f5f5f5;
}

.demo-input-methods [class^='tiny'] {
  margin: 5px;
}
</style>
