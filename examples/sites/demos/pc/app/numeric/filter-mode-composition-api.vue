<template>
  <tiny-numeric v-model="value" title="请选择" shape="filter" clearable blank></tiny-numeric>
</template>

<script setup>
import { ref } from 'vue'
import { Numeric as TinyNumeric } from '@opentiny/vue'

const value = ref(1)
</script>
