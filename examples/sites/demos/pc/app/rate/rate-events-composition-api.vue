<template>
  <tiny-rate v-model="rate1" show-text @change="onchange"></tiny-rate>
</template>

<script setup>
import { ref } from 'vue'
import { Rate as TinyRate, Modal } from '@opentiny/vue'

const rate1 = ref(2)

function onchange(v) {
  Modal.message({ message: `选中的值是${v}`, status: 'info' })
}
</script>
