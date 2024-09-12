<template>
  <tiny-switch v-model="value" :loading="loading"></tiny-switch>
  <tiny-switch v-model="value2" class="demo-switch" :loading="loading"></tiny-switch>
  <tiny-button size="mini" @click="change()"> changeValue </tiny-button>
</template>

<script setup>
import { ref } from 'vue'
import { Switch as TinySwitch, Button as TinyButton } from '@opentiny/vue'

const value = ref(true)
const value2 = ref(false)
const loading = ref(true)

function change() {
  loading.value = !loading.value
}
</script>

<style scoped>
.demo-switch {
  margin-right: 40px;
}
</style>
