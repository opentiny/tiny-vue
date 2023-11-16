<template>
  <div>
    <tiny-cell :data="data" placeholder="请选择日期"></tiny-cell>
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
      data: ''
    }
  }
}
</script>
