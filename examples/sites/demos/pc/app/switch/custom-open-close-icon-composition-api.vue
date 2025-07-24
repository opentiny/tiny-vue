<template>
  <tiny-switch>
    <template #active-icon>
      <TinyIconArrowLeft />
    </template>
    <template #inactive-icon>
      <TinyIconArrowRight />
    </template>
  </tiny-switch>
</template>

<script setup>
import { TinySwitch } from '@opentiny/vue'
import { IconArrowLeft, IconArrowRight } from '@opentiny/vue-icon'

const TinyIconArrowLeft = IconArrowLeft()
const TinyIconArrowRight = IconArrowRight()
</script>
