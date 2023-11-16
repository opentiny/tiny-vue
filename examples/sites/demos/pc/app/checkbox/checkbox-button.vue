<template>
  <div>
    <div>
      自定义背景：
      <tiny-switch v-model="isCustom"></tiny-switch>
    </div>
    <tiny-checkbox-group v-model="checked" :fill="isCustom ? '#409EFF' : ''">
      <tiny-checkbox-button label="复选框1"></tiny-checkbox-button>
      <tiny-checkbox-button label="复选框2"></tiny-checkbox-button>
    </tiny-checkbox-group>
  </div>
</template>

<script>
import { CheckboxButton, CheckboxGroup, Switch } from '@opentiny/vue'

export default {
  components: {
    TinyCheckboxButton: CheckboxButton,
    TinyCheckboxGroup: CheckboxGroup,
    TinySwitch: Switch
  },
  data() {
    return {
      checked: ['复选框1'],
      isCustom: false
    }
  }
}
</script>
