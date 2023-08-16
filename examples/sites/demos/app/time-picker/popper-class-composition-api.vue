<template>
  <div>
    <tiny-time-picker
      v-model="value1"
      popper-class="pickerClass"
      :popper-append-to-body="false"
      placeholder="选择时间"
    ></tiny-time-picker>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { TimePicker as TinyTimePicker } from '@opentiny/vue'

const value1 = ref(new Date(2016, 9, 10, 18, 40))
</script>

<style>
.pickerClass {
  background: #dddddd;
}
</style>
