<template>
  <div>
    <tiny-radio v-model="value" label="1" text="1">选项一</tiny-radio>
    <tiny-radio v-model="value" label="2" text="选项二"></tiny-radio>
    <tiny-radio v-model="value" label="3"></tiny-radio>
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
