<template>
  <div>
    <tiny-radio disabled v-model="radio" label="禁用">
      选中禁用
    </tiny-radio>
    <tiny-radio disabled v-model="radio" label="不选中禁用">
      不选中禁用
    </tiny-radio>
    <div style="margin-top: 20px">
      <tiny-radio-group disabled v-model="radio1">
        <tiny-radio :label="3">
          备选项1
        </tiny-radio>
        <tiny-radio :label="6">
          备选项2
        </tiny-radio>
        <tiny-radio :label="9">
          备选项3
        </tiny-radio>
      </tiny-radio-group>
    </div>
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
      radio: '禁用',
      radio1: '3',
      radio2: '1'
    }
  }
}
</script>
