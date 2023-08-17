<template>
  <tiny-tree-menu :search-icon="IconCalendar"></tiny-tree-menu>
</template>

<script setup lang="jsx">
import { TreeMenu as TinyTreeMenu } from '@opentiny/vue'
import { iconCalendar } from '@opentiny/vue-icon'

const IconCalendar = iconCalendar()
</script>
