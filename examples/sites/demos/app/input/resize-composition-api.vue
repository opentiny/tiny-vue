<template>
  <div class="demo-input">
    <tiny-input type="textarea" v-model="input" placeholder="resize 为默认"></tiny-input>
    <br />
    <br />
    <tiny-input type="textarea" v-model="input" resize="none" placeholder="resize 为 none"></tiny-input>
    <br />
    <br />
    <tiny-input type="textarea" v-model="input" resize="both" placeholder="resize 为 both"></tiny-input>
    <br />
    <br />
    <tiny-input type="textarea" v-model="input" resize="horizontal" placeholder="resize 为 horizontal"></tiny-input>
    <br />
    <br />
    <tiny-input type="textarea" v-model="input" resize="vertical" placeholder="resize 为 vertical"></tiny-input>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Input as TinyInput } from '@opentiny/vue'

const input = ref('')
</script>

<style scoped>
.demo-input .tiny-textarea {
  width: 400px;
}
</style>
