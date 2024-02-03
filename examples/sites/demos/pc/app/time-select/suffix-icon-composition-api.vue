<template>
  <div class="time-select-demo-suffix">
    <tiny-time-select v-model="value" :suffix-icon="IconYes" placeholder="选择时间范围"></tiny-time-select>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { TimeSelect as TinyTimeSelect } from '@opentiny/vue'
import { iconYes } from '@opentiny/vue-icon'

const IconYes = iconYes()
const value = ref('08:30')
</script>

<style scoped>
.time-select-demo-suffix {
  width: 270px;
}
</style>
