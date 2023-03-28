<template>
  <div class="checkbox-wrap">
    <tiny-checkbox-group v-model="checked">
      <tiny-checkbox label="复选框1">
        <span style="color: blue">复选框1</span>
      </tiny-checkbox>
      <tiny-checkbox label="复选框2">
        <span style="color: red">复选框2</span>
      </tiny-checkbox>
    </tiny-checkbox-group>
    <br />
    当前选中的值为：{{ checked }}
  </div>
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
      checked: ['复选框1']
    }
  }
}
</script>

<style>
.checkbox-wrap {
  padding: 20px;
}
</style>
