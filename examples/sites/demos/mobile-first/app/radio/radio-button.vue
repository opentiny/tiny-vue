<template>
  <tiny-radio-group v-model="value" fill="#8ef0e3" text-color="black">
    <tiny-radio-button label="日度" name="name1"></tiny-radio-button>
    <tiny-radio-button label="月度"></tiny-radio-button>
    <tiny-radio-button label="年度"></tiny-radio-button>
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
      value: '1'
    }
  }
}
</script>
