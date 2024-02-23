<template>
  <div>
    <div>默认尺寸</div>
    <tiny-checkbox v-model="checked1" class="mt-2">复选框</tiny-checkbox>
    <br /><br /><br />
    <div>中尺寸</div>
    <tiny-checkbox v-model="checked2" size="medium" class="mt-2">复选框</tiny-checkbox>

    <br /><br /><br />
    <div>垂直布局</div>
    <tiny-checkbox-group size="medium" v-model="checkboxGroup" vertical text-color="#fff" class="mt-2">
      <tiny-checkbox v-for="city in cities" :label="city" :key="city">
        {{ city }}
      </tiny-checkbox>
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
      checked1: true,
      checked2: true,
      checkboxGroup: ['上海'],
      cities: ['上海', '北京', '广州', '深圳']
    }
  }
}
</script>
