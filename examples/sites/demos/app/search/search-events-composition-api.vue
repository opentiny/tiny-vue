<template>
  <tiny-search @search="search" is-enter-search></tiny-search>
</template>

<script setup lang="jsx">
import { Search as TinySearch, Modal } from '@opentiny/vue'

function search(key, value) {
  Modal.message(`${value}`)
}
</script>
