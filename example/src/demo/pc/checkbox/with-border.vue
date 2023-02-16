<template>
  <div>
    <div>
      <tiny-checkbox-group v-model="checkboxGroup1">
        <tiny-checkbox-button
          v-for="city in cities"
          :label="city"
          :key="city"
          >{{ city }}</tiny-checkbox-button
        >
      </tiny-checkbox-group>
    </div>
    <div style="margin-top: 20px">
      <tiny-checkbox-group v-model="checkboxGroup2" size="medium">
        <tiny-checkbox-button
          v-for="city in cities"
          :label="city"
          :key="city"
          >{{ city }}</tiny-checkbox-button
        >
      </tiny-checkbox-group>
    </div>
    <div style="margin-top: 20px">
      <tiny-checkbox-group v-model="checkboxGroup3" size="small">
        <tiny-checkbox-button
          v-for="city in cities"
          :label="city"
          :disabled="city === '北京'"
          :key="city"
          >{{ city }}</tiny-checkbox-button
        >
      </tiny-checkbox-group>
    </div>
    <div style="margin-top: 20px">
      <tiny-checkbox-group v-model="checkboxGroup4" size="mini" disabled>
        <tiny-checkbox-button
          v-for="city in cities"
          :label="city"
          :key="city"
          >{{ city }}</tiny-checkbox-button
        >
      </tiny-checkbox-group>
    </div>
  </div>
</template>

<script>
import { CheckboxButton, CheckboxGroup } from '@opentiny/vue'

export default {
  components: {
    TinyCheckboxButton: CheckboxButton,
    TinyCheckboxGroup: CheckboxGroup
  },
  data() {
    return {
      cities: ['上海', '北京', '广州', '深圳'],
      checkboxGroup1: ['上海'],
      checkboxGroup2: ['上海'],
      checkboxGroup3: ['上海'],
      checkboxGroup4: ['上海']
    }
  }
}
</script>
