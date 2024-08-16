<template>
  <div>
    <span class="demo-radio">单选组实现只读：</span>
    <tiny-radio-group display-only v-model="value1" :options="options"></tiny-radio-group>
    <br />
    <br />
    <span class="demo-radio">每个单选项实现只读：</span>
    <tiny-radio display-only v-model="value" label="1">选项一</tiny-radio>
    <tiny-radio display-only v-model="value" label="2" text="选项二"></tiny-radio>
  </div>
</template>

<script>
import { Radio, RadioGroup } from '@opentiny/vue'

export default {
  components: {
    TinyRadio: Radio,
    TinyRadioGroup: RadioGroup
  },
  data() {
    return {
      value: '1',
      value1: 'B',
      options: [
        { label: 'A', text: '很好' },
        { label: 'B', text: '一般' }
      ]
    }
  }
}
</script>

<style scoped>
.demo-radio {
  font-size: 14px;
}
</style>
