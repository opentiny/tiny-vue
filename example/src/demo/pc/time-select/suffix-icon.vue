<template>
  <div>
    <tiny-time-select
      v-model="value"
      :suffix-icon="IconYes"
      placeholder="选择时间范围"
    ></tiny-time-select>
  </div>
</template>

<script>
import { TimeSelect } from '@opentiny/vue'
import { iconYes } from '@opentiny/vue-icon'

export default {
  components: {
    TinyTimeSelect: TimeSelect
  },
  data() {
    return {
      IconYes: iconYes(),
      value: '08:30'
    }
  }
}
</script>
