<template>
  <tiny-radio-group v-model="value" :options="options"></tiny-radio-group>
</template>

<script setup>
import { ref } from 'vue'
import { RadioGroup as TinyRadioGroup, Modal } from '@opentiny/vue'

function handleClick() {
  Modal.message({ message: 'click' })
}
const value = ref('A')
const options = ref([
  { label: 'A', text: '很好', events: { click: handleClick } },
  { label: 'B', text: '一般' }
])
</script>
