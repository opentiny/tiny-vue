<template>
  <tiny-area size="medium" v-model="area" placeholder="请选择"></tiny-area>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Area as TinyArea } from '@opentiny/vue'

const area = ref(['3623', '4199', '649991', '661414'])
</script>
