<template>
  <tiny-radio-group v-model="value" :options="options"></tiny-radio-group>
  <div class="mt-20">
    <tiny-radio-group v-model="value" type="button" :options="burronOptions"></tiny-radio-group>
  </div>
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
const burronOptions = ref([
  { label: 'A', text: '公交', events: { click: handleClick } },
  { label: 'B', text: '地铁' }
])
</script>

<style scoped>
.mt-20 {
  margin-top: 20px;
}
</style>
