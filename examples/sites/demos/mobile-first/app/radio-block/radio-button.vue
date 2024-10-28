<template>
  <tiny-radio-group v-model="value" text-color="black">
    <tiny-radio-button label="label1" name="name1"></tiny-radio-button>
    <tiny-radio-button label="label2"></tiny-radio-button>
    <tiny-radio-button label="label3"></tiny-radio-button>
  </tiny-radio-group>
</template>

<script>
import { TinyRadioButton, TinyRadioGroup } from '@opentiny/vue'

export default {
  components: {
    TinyRadioButton,
    TinyRadioGroup
  },
  data() {
    return {
      value: '1'
    }
  }
}
</script>
