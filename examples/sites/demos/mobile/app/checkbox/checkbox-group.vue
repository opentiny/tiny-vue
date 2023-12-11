<template>
  <div class="checkbox-wrap">
    <tiny-checkbox-group v-model="checked">
      <tiny-checkbox label="复选框1"></tiny-checkbox>
      <tiny-checkbox label="复选框2"></tiny-checkbox>
    </tiny-checkbox-group>
    <p>当前选中的值为：{{ checked }}</p>
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
      checked: ['复选框1']
    }
  }
}
</script>

<style scoped>
.checkbox-wrap {
  padding: 20px;
}
</style>
