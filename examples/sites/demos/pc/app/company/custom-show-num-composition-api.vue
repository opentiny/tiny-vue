<template>
  <div class="demo-company-class">
    <tiny-company v-model="value" clearable :max="2" :disabled="false"></tiny-company>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { TinyCompany } from '@opentiny/vue'

const value = ref('')
</script>

<style scoped>
.demo-company-class {
  width: 280px;
}
</style>
