<template>
  <tiny-time-line :data="data" :active="active" @click="onClick"></tiny-time-line>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { TinyTimeLine } from '@opentiny/vue'
import { iconLocalePanel, iconFeedback, iconSynchronize, iconAgency } from '@opentiny/vue-icon'

const active = ref(1)
const data = reactive([
  { name: '立项', time: '2022-11-12 10:00', autoColor: iconLocalePanel() },
  { name: '开发', time: '2022-11-15 20:00', autoColor: iconFeedback() },
  { name: '交付', time: '2022-12-10 20:00', autoColor: iconSynchronize() },
  { name: '结项', time: '2022-12-15 00:00', autoColor: iconAgency() }
])

const onClick = (index) => {
  active.value = index
}
</script>
