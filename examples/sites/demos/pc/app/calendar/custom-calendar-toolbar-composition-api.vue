<template>
  <p>时间：{{ todayValue }}</p>
  <tiny-calendar>
    <template #tool="{ slotScope }">
      <tiny-button @click="toToday(slotScope)">今天</tiny-button>
    </template>
  </tiny-calendar>
</template>

<script setup lang="jsx">
import { Calendar as TinyCalendar, Button as TinyButton } from '@opentiny/vue'
import { ref } from 'vue'

let todayValue = ref('')

function toToday(scope) {
  let year = new Date().getFullYear()
  let month = new Date().getMonth() + 1
  let day = new Date().getDate()
  scope.selectedDate = new Date(year + '-' + month + '-' + day).valueOf()
  todayValue.value = year + '-' + month + '-' + day
}
</script>
