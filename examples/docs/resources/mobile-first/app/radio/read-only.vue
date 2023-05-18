<template>
  <div>
    <div>
      <tiny-radio display-only v-model="value" label="1">
        选项一
      </tiny-radio>
      <tiny-radio display-only v-model="value" label="2" text="选项二"></tiny-radio>
    </div>
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
