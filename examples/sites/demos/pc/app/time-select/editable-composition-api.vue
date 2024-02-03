<template>
  <div class="time-select-demo-editable">
    <tiny-time-select v-model="value" placeholder="选择时间" :editable="false"></tiny-time-select>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { TimeSelect as TinyTimeSelect } from '@opentiny/vue'

const value = ref('')
</script>

<style scoped>
.time-select-demo-editable {
  width: 270px;
}
</style>
