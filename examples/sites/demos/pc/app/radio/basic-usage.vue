<template>
  <div>
    <tiny-radio v-model="value" label="1">选项一</tiny-radio>
    <tiny-radio v-model="value" label="2">选项二</tiny-radio>
  </div>
</template>

<script>
import { Radio } from '@opentiny/vue'

export default {
  components: {
    TinyRadio: Radio
  },
  data() {
    return {
      value: '1'
    }
  }
}
</script>
