<template>
  <div>
    <div>默认尺寸：</div>
    <tiny-radio-group v-model="value1">
      <tiny-radio label="1">选项一</tiny-radio>
      <tiny-radio label="2" text="选项二"></tiny-radio>
    </tiny-radio-group>
    <br />
    <br />
    <br />
    <div>中尺寸：</div>
    <tiny-radio-group v-model="value2" size="medium">
      <tiny-radio label="1">选项一</tiny-radio>
      <tiny-radio label="2" text="选项二"></tiny-radio>
    </tiny-radio-group>
    <br />
    <br />
    <br />
    <div>垂直布局：</div>
    <tiny-radio-group v-model="value3" vertical>
      <tiny-radio size="medium" label="1">选项一</tiny-radio>
      <tiny-radio size="medium" label="2" text="选项二"></tiny-radio>
    </tiny-radio-group>
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
      value1: '1',
      value2: '1',
      value3: '1'
    }
  }
}
</script>
