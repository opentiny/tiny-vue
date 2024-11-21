<template>
  <tiny-checkbox-group v-model="checkboxGroup" :min="1" :max="2">
    <tiny-checkbox v-for="city in cities" :label="city" :key="city">
      {{ city }}
    </tiny-checkbox>
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
      checkboxGroup: ['上海', '北京'],
      cities: ['上海', '北京', '广州', '深圳']
    }
  }
}
</script>
