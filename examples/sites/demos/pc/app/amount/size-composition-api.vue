<template>
  <tiny-amount size="medium" v-model="value" :date="date"></tiny-amount>
  <br />
  <tiny-amount v-model="value" :date="date"></tiny-amount>
  <br />
  <tiny-amount size="small" v-model="value" :date="date"></tiny-amount>
  <br />
  <tiny-amount size="mini" v-model="value" :date="date"></tiny-amount>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { TinyAmount } from '@opentiny/vue'

const value = ref(88.88)
const date = ref(new Date())
</script>
