<template>
  <tiny-rate v-model="rate1" show-text @change="onchange"></tiny-rate>
</template>

<script setup>
import { ref } from 'vue'
import { TinyRate, TinyModal } from '@opentiny/vue'

const rate1 = ref(2)

function onchange(v) {
  TinyModal.message({ message: `选中的值是 ${v}`, status: 'info' })
}
</script>
