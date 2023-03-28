<template>
  <tiny-checkbox-group v-model="checked">
    <tiny-checkbox label="复选框1" name="name1" checked></tiny-checkbox>
    <tiny-checkbox label="复选框2" name="name2" disabled></tiny-checkbox>
  </tiny-checkbox-group>
</template>

<script lang="jsx">
import { Checkbox, CheckboxGroup } from '@opentiny/vue'

export default {
  components: {
    TinyCheckbox: Checkbox,
    TinyCheckboxGroup: CheckboxGroup
  },
  data() {
    return {
      checked: ['']
    }
  }
}
</script>
