<template>
  <tiny-tree-menu :search-icon="tinyIconCalendar" :prefix-icon="tinyIconDoubleRight"></tiny-tree-menu>
</template>

<script setup>
import { TreeMenu as TinyTreeMenu } from '@opentiny/vue'
import { iconCalendar, iconDoubleRight } from '@opentiny/vue-icon'

const tinyIconCalendar = iconCalendar()
const tinyIconDoubleRight = iconDoubleRight()
</script>
