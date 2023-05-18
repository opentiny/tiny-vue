<template>
  <tiny-radio-group v-model="value">
    <tiny-radio :label="1">
      选项一
    </tiny-radio>
    <tiny-radio :label="2">
      选项二
    </tiny-radio>
    <tiny-radio :label="3">
      选项三
    </tiny-radio>
  </tiny-radio-group>
</template>

<script>
import { Radio, RadioGroup } from '@opentiny/vue'

export default {
  components: {
    TinyRadio: Radio,
    TinyRadioGroup: RadioGroup
  },
  data() {
    return {
      value: 1
    }
  }
}
</script>
