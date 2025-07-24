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

<script>
import { TinySwitch } from '@opentiny/vue'
import { IconArrowLeft, IconArrowRight } from '@opentiny/vue-icon'

export default {
  components: {
    TinySwitch,
    TinyIconArrowLeft: IconArrowLeft(),
    TinyIconArrowRight: IconArrowRight()
  }
}
</script>
