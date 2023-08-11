<template>
  <div>
    <tiny-switch v-model="value1" disabled></tiny-switch>
    <tiny-switch v-model="value2" disabled></tiny-switch>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Switch } from '@opentiny/vue'

const value1 = ref(true)
const value2 = ref(false)
const TinySwitch = Switch
</script>
