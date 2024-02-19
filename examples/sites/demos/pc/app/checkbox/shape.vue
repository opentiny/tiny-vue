<template>
  <div>
    <tiny-checkbox v-model="checked" shape="filter">复选框1</tiny-checkbox>
    <tiny-checkbox-group v-model="checkedArr" shape="filter">
      <tiny-checkbox label="复选框1"></tiny-checkbox>
      <tiny-checkbox label="复选框2">复选框2复选框2复选框2复选框2复选框2复选框2</tiny-checkbox>
    </tiny-checkbox-group>
  </div>
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
      checked: true,
      checkedArr: ['复选框1']
    }
  }
}
</script>

<style scoped>
.tiny-checkbox-group {
  margin-top: 20px;
}
</style>
