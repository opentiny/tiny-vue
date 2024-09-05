<template>
  <tiny-checkbox-group v-model="checkboxGroup" vertical>
    <tiny-checkbox-button v-for="city in cities" :label="city" :key="city">{{ city }}</tiny-checkbox-button>
  </tiny-checkbox-group>
</template>

<script>
import { CheckboxGroup, CheckboxButton } from '@opentiny/vue'

export default {
  components: {
    TinyCheckboxGroup: CheckboxGroup,
    TinyCheckboxButton: CheckboxButton
  },
  data() {
    return {
      checkboxGroup: ['上海'],
      cities: ['上海', '北京', '广州', '深圳']
    }
  }
}
</script>
