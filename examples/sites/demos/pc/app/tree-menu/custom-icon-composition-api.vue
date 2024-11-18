<template>
  <tiny-tree-menu :search-icon="tinyIconCalendar" :suffix-icon="tinyIconDoubleRight"></tiny-tree-menu>
</template>

<script setup>
import { TinyTreeMenu } from '@opentiny/vue'
import { iconCalendar, iconDoubleRight } from '@opentiny/vue-icon'

const tinyIconCalendar = iconCalendar()
const tinyIconDoubleRight = iconDoubleRight()
</script>
