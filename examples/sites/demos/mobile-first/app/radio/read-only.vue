<template>
  <div>
    <div class="mb-2">单选组实现只读：</div>
    <tiny-radio-group display-only v-model="value1" :options="options"></tiny-radio-group>
    <br /><br /><br />
    <div class="mb-2">每个单选项实现只读：</div>
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
        { label: 'A', text: '很好', events: { click: this.handleClick } },
        { label: 'B', text: '一般' }
      ]
    }
  }
}
</script>
