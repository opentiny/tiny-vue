<template>
  <div>
    <tiny-radio disabled v-model="radio" label="禁用">选中禁用</tiny-radio>
    <tiny-radio disabled v-model="radio" label="不选中禁用">不选中禁用</tiny-radio>
    <div class="mt-20">
      <tiny-radio-group disabled v-model="radio1">
        <tiny-radio v-for="item in dataArr" :key="item.value" :label="item.lable">{{ item.value }}</tiny-radio>
      </tiny-radio-group>
    </div>

    <div class="mt-20">
      <tiny-radio-group v-model="radio2">
        <tiny-radio-button disabled label="1">日度</tiny-radio-button>
        <tiny-radio-button disabled label="2">月度</tiny-radio-button>
        <tiny-radio-button label="3">年度</tiny-radio-button>
      </tiny-radio-group>
    </div>
  </div>
</template>

<script>
import { Radio, RadioButton, RadioGroup } from '@opentiny/vue'

export default {
  components: {
    TinyRadio: Radio,
    TinyRadioButton: RadioButton,
    TinyRadioGroup: RadioGroup
  },
  data() {
    return {
      radio: '禁用',
      radio1: '6',
      radio2: '1',
      dataArr: [
        { lable: '3', value: '备选项1' },
        { lable: '6', value: '备选项2' },
        { lable: '9', value: '备选项3' }
      ]
    }
  }
}
</script>

<style scoped>
.mt-20 {
  margin-top: 20px;
}
</style>
