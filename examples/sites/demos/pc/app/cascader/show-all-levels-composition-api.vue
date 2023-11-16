<template>
  <tiny-cascader v-model="value" :options="options" :show-all-levels="false"></tiny-cascader>
</template>

<script setup>
import { Cascader as TinyCascader } from '@opentiny/vue'
import { reactive } from 'vue'

const options = reactive([])
</script>
