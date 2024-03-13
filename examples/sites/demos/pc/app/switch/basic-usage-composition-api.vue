<template>
  <tiny-switch v-model="value"></tiny-switch>
</template>

<script setup>
import { ref } from 'vue'
import { Switch as TinySwitch } from '@opentiny/vue'

const value = ref(true)
</script>
