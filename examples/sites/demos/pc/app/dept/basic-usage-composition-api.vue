<template>
  <div class="demo-dept-class">
    <tiny-dept v-model="value"></tiny-dept>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { TinyDept } from '@opentiny/vue'

const value = ref('022471')
</script>

<style scoped>
.demo-dept-class {
  width: 280px;
}
</style>
