<template>
  <tiny-date-picker
    v-model="value"
    type="daterange"
    range-separator="至"
    start-placeholder="开始日期"
    end-placeholder="结束日期"
  ></tiny-date-picker>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { DatePicker as TinyDatePicker } from '@opentiny/vue'

const value = ref([])
</script>
