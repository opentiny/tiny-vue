<template>
  <tiny-switch @change="enent"></tiny-switch>
</template>

<script setup lang="jsx">
import { Switch, Modal } from '@opentiny/vue'

const TinySwitch = Switch

function enent(val) {
  Modal.message({ message: `${val}`, status: 'info' })
}
</script>
