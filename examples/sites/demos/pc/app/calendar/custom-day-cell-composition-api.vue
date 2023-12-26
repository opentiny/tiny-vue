<template>
  <tiny-calendar :events="eventslist" :year="2019" :month="9">
    <template #day="{ slotScope }">
      <p>{{ slotScope.title }}</p>
    </template>
  </tiny-calendar>
</template>

<script setup>
import { ref } from 'vue'
import { Calendar as TinyCalendar } from '@opentiny/vue'

const eventslist = ref([
  {
    time: 1567651320529,
    title: '通知事项',
    content: '请注意该通知事项',
    type: 'info'
  },
  {
    time: 1567651320829,
    title: '通知事项A',
    content: '请注意该通知事项A',
    type: 'info'
  },
  {
    time: 1568390400000,
    title: '这是一条警告',
    content: '这是一条警告消息这是一条警告',
    type: 'warning'
  },
  {
    time: 1568476800000,
    title: '这是一条错误',
    content: '这是一条错误，还有错误',
    type: 'error'
  },
  {
    time: 1568476800000,
    title: '这是一条普通通知',
    content: '这是一条普通通知，十一放假',
    type: 'info'
  },
  {
    time: 1537873760000,
    title: '这是一条成功消息',
    content: '版本上线成功',
    type: 'success'
  }
])
</script>
