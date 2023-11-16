<template>
  <tiny-radio-group v-model="radio2">
    <tiny-radio-button label="1">日度</tiny-radio-button>
    <tiny-radio-button label="2">月度</tiny-radio-button>
    <tiny-radio-button label="3">年度</tiny-radio-button>
  </tiny-radio-group>
</template>

<script>
import { RadioButton, RadioGroup } from '@opentiny/vue'

export default {
  components: {
    TinyRadioButton: RadioButton,
    TinyRadioGroup: RadioGroup
  },
  data() {
    return {
      radio2: '1'
    }
  }
}
</script>
