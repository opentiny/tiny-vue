<template>
  <div>
    <tiny-checkbox :indeterminate="isIndeterminate" v-model="checkAll"> 全选 </tiny-checkbox>
    <div style="margin: 15px 0"></div>
    <tiny-checkbox-group v-model="checkboxGroup">
      <tiny-checkbox v-for="(city, index) in cities" :label="city" :key="index">{{ city }}</tiny-checkbox>
    </tiny-checkbox-group>
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
      checkboxGroup: ['北京'],
      cities: ['上海', '北京', '广州', '深圳']
    }
  },
  computed: {
    isIndeterminate: {
      get() {
        return this.checkboxGroup.length > 0 && this.checkboxGroup.length !== this.cities.length
      }
    },
    checkAll: {
      get() {
        return this.checkboxGroup.length === this.cities.length
      },
      set(val) {
        if (val) {
          this.checkboxGroup = [...this.cities]
        } else {
          this.checkboxGroup = []
        }
      }
    }
  }
}
</script>
