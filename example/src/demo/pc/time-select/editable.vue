<template>
  <tiny-time-select
    v-model="value"
    placeholder="选择时间"
    :editable="false"
  ></tiny-time-select>
</template>

<script>
import { TimeSelect } from '@opentiny/vue'

export default {
  components: {
    TinyTimeSelect: TimeSelect
  },
  data() {
    return {
      value: ''
    }
  }
}
</script>
