<template>
  <tiny-checkbox-group v-model="checked" fill="#fa9841" text-color="#eee">
    <tiny-checkbox-button label="复选框 1"></tiny-checkbox-button>
    <tiny-checkbox-button label="复选框 2"></tiny-checkbox-button>
  </tiny-checkbox-group>
</template>

<script>
import { TinyCheckboxButton, TinyCheckboxGroup } from '@opentiny/vue'

export default {
  components: {
    TinyCheckboxButton,
    TinyCheckboxGroup
  },
  data() {
    return {
      checked: ['复选框 1']
    }
  }
}
</script>
