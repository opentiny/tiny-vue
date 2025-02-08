<template>
  <div class="switch-wrap">
    <p>默认</p>
    <tiny-switch v-model="value1" true-value="1"></tiny-switch>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { TinySwitch } from '@opentiny/vue-mobile'

const value1 = ref('1')
</script>

<style scoped>
.switch-wrap {
  padding: 20px;
}
</style>
