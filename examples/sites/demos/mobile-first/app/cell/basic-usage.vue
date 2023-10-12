<template>
  <div>
    <tiny-cell :data="data"></tiny-cell>
  </div>
</template>

<script>
import { Cell } from '@opentiny/vue'

export default {
  components: {
    TinyCell: Cell
  },
  data() {
    return {
      data: '进行中'
    }
  }
}
</script>
