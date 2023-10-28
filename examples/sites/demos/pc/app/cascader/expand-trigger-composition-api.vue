<template>
  <tiny-cascader :options="options" :props="{ expandTrigger: 'hover' }"></tiny-cascader>
</template>

<script setup>
import { Cascader as TinyCascader } from '@opentiny/vue'
import { reactive } from 'vue'

const options = reactive([])
</script>
