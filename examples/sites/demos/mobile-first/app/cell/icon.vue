<template>
  <div>
    <tiny-cell :data="data" :icon="icon"></tiny-cell>
  </div>
</template>

<script>
import { Cell } from '@opentiny/vue'
import { IconWriting } from '@opentiny/vue-icon'

export default {
  components: {
    TinyCell: Cell
  },
  data() {
    return {
      data: '',
      icon: IconWriting()
    }
  }
}
</script>
