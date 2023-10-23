<template>
  <tiny-time-select v-model="value" placeholder="选择时间"></tiny-time-select>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { TimeSelect as TinyTimeSelect } from '@opentiny/vue'

const value = ref('')
</script>
