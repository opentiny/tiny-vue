<template>
  <tiny-floating-button :icon="IconArrowUp"></tiny-floating-button>
</template>

<script>
import { FloatingButton } from '@opentiny/vue'
import { IconArrowUp } from '@opentiny/vue-icon'

export default {
  components: {
    TinyFloatingButton: FloatingButton
  },
  data() {
    return {
      IconArrowUp: IconArrowUp()
    }
  }
}
</script>
