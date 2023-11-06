<template>
  <div>
    <tiny-checkbox-group v-for="(size, index) in sizeList" :key="index" v-model="checkboxGroup" :size="size">
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
      cities: ['上海', '北京', '广州', '深圳'],
      sizeList: ['', 'medium', 'small', 'mini'],
      checkboxGroup: ['上海']
    }
  }
}
</script>
