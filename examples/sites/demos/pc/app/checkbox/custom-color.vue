<template>
  <tiny-checkbox-group v-model="checked" fill="#fa9841" text-color="#eee">
    <tiny-checkbox-button label="复选框1"></tiny-checkbox-button>
    <tiny-checkbox-button label="复选框2"></tiny-checkbox-button>
  </tiny-checkbox-group>
</template>

<script>
import { CheckboxButton, CheckboxGroup } from '@opentiny/vue'

export default {
  components: {
    TinyCheckboxButton: CheckboxButton,
    TinyCheckboxGroup: CheckboxGroup
  },
  data() {
    return {
      checked: ['复选框1']
    }
  }
}
</script>
