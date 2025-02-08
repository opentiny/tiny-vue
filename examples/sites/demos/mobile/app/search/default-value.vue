<template>
  <tiny-search v-model="value"></tiny-search>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { TinySearch } from '@opentiny/vue-mobile'

const value = ref('公司')
</script>
