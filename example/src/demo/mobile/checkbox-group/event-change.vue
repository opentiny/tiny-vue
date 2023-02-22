<template>
  <div class="checkbox-group-wrap">
    <tiny-checkbox-group v-model="checkboxGroup" @change="handleChange">
      <tiny-checkbox v-for="(city, index) in cities" :label="city" :key="index">{{ city }}</tiny-checkbox>
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
      checkboxGroup: ['北京'],
      cities: ['上海', '北京', '广州', '深圳']
    }
  },
  methods: {
    handleChange(val) {
      console.log('当前值为：' + val)
    }
  }
}
</script>

<style scoped>
.checkbox-group-wrap {
  padding: 20px;
}
</style>
