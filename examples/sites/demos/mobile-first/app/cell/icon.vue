<template>
  <div>
    <tiny-cell :data="data" :icon="icon"></tiny-cell>
  </div>
</template>

<script>
import { TinyCell } from '@opentiny/vue'
import { IconWriting } from '@opentiny/vue-icon'

export default {
  components: {
    TinyCell
  },
  data() {
    return {
      data: '',
      icon: IconWriting()
    }
  }
}
</script>
