<template>
  <tiny-company v-model="value" clearable :max="2" :disabled="false"></tiny-company>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Company as TinyCompany } from '@opentiny/vue'

const value = ref('')
</script>
