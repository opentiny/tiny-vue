<template>
  <tiny-search @change="change"></tiny-search>
</template>

<script setup lang="jsx">
import { Search as TinySearch, Modal } from '@opentiny/vue'

function change(key, value) {
  Modal.message(`${value}`)
}
</script>
