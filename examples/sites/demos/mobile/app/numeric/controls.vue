<template>
  <tiny-numeric v-model="stepNum" controls></tiny-numeric>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { TinyNumeric } from '@opentiny/vue-mobile'

const stepNum = ref(2)
</script>
