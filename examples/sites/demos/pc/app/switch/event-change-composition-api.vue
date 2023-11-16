<template>
  <tiny-switch @change="handleChange"></tiny-switch>
</template>

<script setup>
import { Switch as TinySwitch, Modal } from '@opentiny/vue'

function handleChange(val) {
  Modal.message({ message: `开关值：${val}` })
}
</script>
