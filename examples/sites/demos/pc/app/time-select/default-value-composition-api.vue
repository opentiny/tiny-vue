<template>
  <div class="time-select-demo-default">
    <tiny-time-select v-model="value" placeholder="选择时间" :default-value="defaultValue"></tiny-time-select>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { TimeSelect as TinyTimeSelect } from '@opentiny/vue'

const value = ref('')
const defaultValue = ref('10:00')
</script>

<style scoped>
.time-select-demo-default {
  width: 270px;
}
</style>
