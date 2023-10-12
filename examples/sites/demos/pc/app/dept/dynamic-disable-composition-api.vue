<template>
  <tiny-dept v-model="value" disabled></tiny-dept>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Dept as TinyDept } from '@opentiny/vue'

const value = ref('022471')
</script>
