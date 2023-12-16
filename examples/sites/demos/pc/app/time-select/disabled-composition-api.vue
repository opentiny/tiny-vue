<template>
  <div class="time-select-demo-disabled">
    <tiny-time-select v-model="value" placeholder="选择时间" disabled></tiny-time-select>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { TimeSelect as TinyTimeSelect } from '@opentiny/vue'

const value = ref('')
</script>

<style scoped>
.time-select-demo-disabled {
  width: 270px;
}
</style>
