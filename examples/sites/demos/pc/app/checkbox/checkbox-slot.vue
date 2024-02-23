<template>
  <tiny-checkbox-group v-model="checked">
    <tiny-checkbox label="复选框1">
      <template #default>
        <span class="primary-bg">复选框1</span>
      </template>
    </tiny-checkbox>
    <tiny-checkbox label="复选框2">
      <template #default>
        <span class="warning-bg">复选框2</span>
      </template>
    </tiny-checkbox>
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
      checked: ['复选框1']
    }
  }
}
</script>

<style scoped>
.primary-bg {
  color: #5e7ce0;
}
.warning-bg {
  color: #fa9841;
}
</style>
