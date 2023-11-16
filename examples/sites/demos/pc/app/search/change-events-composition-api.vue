<template>
  <tiny-search @change="change" @input="input"></tiny-search>
</template>

<script setup lang="jsx">
import { Search as TinySearch, Modal } from '@opentiny/vue'

function change(key, value) {
  Modal.message(`change: ${value}`)
}

function input(key, value) {
  Modal.message(`input: ${key}, ${JSON.stringify(value)}`)
}
</script>
