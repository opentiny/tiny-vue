<template>
  <tiny-checkbox-group v-model="checked">
    <tiny-checkbox label="复选框1"></tiny-checkbox>
    <tiny-checkbox label="复选框2" text="复选框2文本"></tiny-checkbox>
    <tiny-checkbox label="复选框3" text="复选框3">复选框3文本</tiny-checkbox>
  </tiny-checkbox-group>
</template>

<script>
import { TinyCheckbox, TinyCheckboxGroup } from '@opentiny/vue'

export default {
  components: {
    TinyCheckbox,
    TinyCheckboxGroup
  },
  data() {
    return {
      checked: ['复选框1', '复选框2', '复选框3']
    }
  }
}
</script>
