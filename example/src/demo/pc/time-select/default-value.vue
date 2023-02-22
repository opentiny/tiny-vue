<template>
  <tiny-time-select v-model="value" placeholder="选择时间" :default-value="defaultValue"></tiny-time-select>
</template>

<script>
import { TimeSelect } from '@opentiny/vue'

export default {
  components: {
    TinyTimeSelect: TimeSelect
  },
  data() {
    return {
      value: '',
      defaultValue: '10:00'
    }
  }
}
</script>
