<template>
  <div style="margin-top: 20px">
    <tiny-checkbox-group v-model="checkboxGroup" size="small">
      <tiny-checkbox-button v-for="city in cities" :label="city" :key="city">{{ city }}</tiny-checkbox-button>
    </tiny-checkbox-group>
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
      cities: ['上海', '北京', '广州', '深圳', '西安', '南京', '天津', '四川', '河北', '云南', '海南', '厦门'],
      checkboxGroup: ['上海']
    }
  }
}
</script>
