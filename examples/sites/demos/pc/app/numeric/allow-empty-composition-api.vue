<template>
  <tiny-numeric v-model="value" allow-empty @change="onChange"></tiny-numeric>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Numeric as TinyNumeric, Modal } from '@opentiny/vue'

const value = ref(1)

const onChange = (val: number | undefined, oldVal: number | undefined) => {
  Modal.message({ message: `${val} ${oldVal}`, status: 'info' })
}
</script>
