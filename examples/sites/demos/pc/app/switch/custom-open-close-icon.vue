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
import { Switch } from '@opentiny/vue'
import { IconArrowLeft, IconArrowRight } from '@opentiny/vue-icon'

export default {
  components: {
    TinySwitch: Switch,
    TinyIconArrowLeft: IconArrowLeft(),
    TinyIconArrowRight: IconArrowRight()
  }
}
</script>
