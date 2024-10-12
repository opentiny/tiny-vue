<template>
  <div class="demo-checkbox-vertical">
    <div>
      <tiny-checkbox-group v-model="checkboxGroup" vertical>
        <tiny-checkbox-button v-for="city in cities" :label="city" :key="city">{{ city }}</tiny-checkbox-button>
      </tiny-checkbox-group>
    </div>
    <div>
      <tiny-checkbox :indeterminate="isIndeterminate" v-model="checkAll"> 全选 </tiny-checkbox>
      <br /><br />
      <tiny-checkbox-group v-model="checkboxGroup" vertical>
        <tiny-checkbox v-for="(city, index) in cities" :label="city" :key="index">
          {{ city }}
        </tiny-checkbox>
      </tiny-checkbox-group>
    </div>
  </div>
</template>

<script>
import { Checkbox, CheckboxGroup, CheckboxButton } from '@opentiny/vue'

export default {
  components: {
    TinyCheckboxGroup: CheckboxGroup,
    TinyCheckboxButton: CheckboxButton,
    TinyCheckbox: Checkbox
  },
  data() {
    return {
      checkboxGroup: ['上海'],
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

<style scoped>
.demo-checkbox-vertical {
  display: flex;
  align-items: center;
  width: 300px;
  justify-content: space-between;
}
</style>
