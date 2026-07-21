<template>
  <tiny-slider-button-group v-model="radio2" :options="options"></tiny-slider-button-group>
</template>

<script setup>
import { TinySliderButtonGroup, Modal } from '@opentiny/vue'
import { ref } from 'vue'

const radio2 = ref('很好')

const handleClick = () => {
  Modal.message({ message: 'click' })
}

const options = ref([{ label: '很好', events: { click: handleClick } }, { label: '一般' }])
</script>
