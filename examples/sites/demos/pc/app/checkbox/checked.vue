<template>
  <tiny-checkbox-group v-model="checkedData">
    <tiny-checkbox label="复选框 1" name="name1"></tiny-checkbox>
    <tiny-checkbox label="复选框 2" name="name2" checked></tiny-checkbox>
    <tiny-checkbox label="复选框 3" name="name3"></tiny-checkbox>
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
      checkedData: ['复选框 1']
    }
  }
}
</script>
