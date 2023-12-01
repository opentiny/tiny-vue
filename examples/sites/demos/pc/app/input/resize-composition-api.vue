<template>
  <div class="demo-input">
    <tiny-input type="textarea" v-model="input" placeholder="default"></tiny-input>
    <tiny-input type="textarea" v-model="input" resize="none" placeholder="resize = none"></tiny-input>
    <tiny-input type="textarea" v-model="input" resize="both" placeholder="resize = both"></tiny-input>
    <tiny-input type="textarea" v-model="input" resize="horizontal" placeholder="resize = horizontal"></tiny-input>
    <tiny-input type="textarea" v-model="input" resize="vertical" placeholder="resize = vertical"></tiny-input>
    <p>autosize</p>
    <tiny-input type="textarea" v-model="textarea" placeholder="autosize = { minRows: 2, maxRows: 3 }" :autosize="{ minRows: 2, maxRows: 3 }"></tiny-input>
    <tiny-input type="textarea" v-model="textarea" placeholder="autosize" autosize></tiny-input>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Input as TinyInput } from '@opentiny/vue'

const input = ref('')
const textarea = ref('')
</script>

<style scoped>
.demo-input .tiny-textarea {
  width: auto;
  margin: 5px;
}
</style>
