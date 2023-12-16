<template>
  <div class="time-select-demo-icon">
    <tiny-time-select
      v-model="value"
      popper-class="myselect"
      placeholder="选择时间"
      :clear-icon="IconYes"
      clearable
      name="name"
    ></tiny-time-select>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { TimeSelect as TinyTimeSelect } from '@opentiny/vue'
import { iconYes } from '@opentiny/vue-icon'

const IconYes = iconYes()
const value = ref('')
</script>

<style scoped>
.time-select-demo-icon {
  width: 270px;
}
</style>
