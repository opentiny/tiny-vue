<template>
  <tiny-checkbox-group v-model="checked">
    <tiny-checkbox label="复选框1"></tiny-checkbox>
    <tiny-checkbox label="复选框2">描述文本</tiny-checkbox>
  </tiny-checkbox-group>
</template>

<script>
import { Checkbox, CheckboxGroup } from '@opentiny/vue'

export default {
  components: {
    TinyCheckbox: Checkbox,
    TinyCheckboxGroup: CheckboxGroup
  },
  data() {
    return {
      checked: ['复选框1', '复选框2']
    }
  }
}
</script>
