<template>
  <tiny-currency v-model="value" placeholder="请选择" set-default></tiny-currency>
</template>

<script setup>
import { ref } from 'vue'
import { Currency as TinyCurrency } from '@opentiny/vue'

const value = ref('CNY')
</script>
