<template>
  <tiny-time-line :data="data" :active="active" @click="onClick"></tiny-time-line>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { TimeLine as TinyTimeLine } from '@opentiny/vue'
import { iconCheckOut, iconCalendar, iconLoading, iconEnd } from '@opentiny/vue-icon'

const active = ref(1)
const data = reactive([
  { name: '立项', time: '2022-11-12 10:00', autoColor: iconCheckOut() },
  { name: '开发', time: '2022-11-15 20:00', autoColor: iconCalendar() },
  { name: '交付', time: '2022-12-10 20:00', autoColor: iconLoading() },
  { name: '结项', time: '2022-12-15 00:00', autoColor: iconEnd() }
])

const onClick = (index) => {
  active.value = index
}
</script>
