<template>
  <tiny-nav-bar>
    自定义标题
    <template #left>
      <tiny-icon-arrow-left></tiny-icon-arrow-left>
    </template>
    <template #right>
      <tiny-icon-more></tiny-icon-more>
    </template>
  </tiny-nav-bar>
</template>

<script setup lang="jsx">
import { TinyNavBar } from '@opentiny/vue-mobile'
import { iconArrowLeft, iconMore } from '@opentiny/vue-icon'

const TinyIconArrowLeft = iconArrowLeft()
const TinyIconMore = iconMore()
</script>
