<template>
  <tiny-checkbox-group v-model="checkList" type="checkbox" :options="options"></tiny-checkbox-group>
</template>

<script setup>
import { ref } from 'vue'
import { TinyCheckboxGroup, TinyModal } from '@opentiny/vue'

function handleClick() {
  TinyModal.message({ message: 'click', status: 'info' })
}
const checkList = ref(['A'])
const options = ref([
  { label: 'A', text: '很好', events: { click: handleClick } },
  { label: 'B', text: '一般' }
])
</script>
