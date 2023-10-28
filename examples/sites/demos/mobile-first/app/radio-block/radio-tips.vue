<template>
  <tiny-radio-group v-model="value" text-color="black" show-tips>
    <tiny-radio-button label="label1" tip-content="label1"></tiny-radio-button>
    <tiny-radio-button label="label2" tip-content="label2"></tiny-radio-button>
    <tiny-radio-button label="label3" tip-content="label3"></tiny-radio-button>
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
      value: 'label1'
    }
  }
}
</script>
