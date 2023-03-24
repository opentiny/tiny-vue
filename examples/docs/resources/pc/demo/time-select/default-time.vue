<template>
  <tiny-time-select v-model="value" placeholder="选择时间" :default-time="defaultTime"></tiny-time-select>
</template>

<script lang="jsx">
import { TimeSelect } from '@opentiny/vue'

export default {
  components: {
    TinyTimeSelect: TimeSelect
  },
  data() {
    return {
      value: '',
      defaultTime: '10:00'
    }
  }
}
</script>
