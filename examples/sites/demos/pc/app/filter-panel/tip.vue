<template>
  <div>
    <div class="mb10">
      <tiny-switch v-model="isBlank"></tiny-switch><span class="ml10">{{ isBlank ? '透明' : '非透明' }}</span>
    </div>
    <tiny-filter-panel ref="filterPanel" label="物品数量" :tip="tip" :value="value" :clearable="false" :blank="isBlank">
      <tiny-radio-group v-model="radioVal" size="mini">
        <tiny-radio label="大于">大于</tiny-radio>
        <tiny-radio label="等于">等于</tiny-radio>
        <tiny-radio label="小于">小于</tiny-radio>
      </tiny-radio-group>
      <tiny-input type="text" v-model="inputVal" style="margin-top: 20px"></tiny-input>
    </tiny-filter-panel>
  </div>
</template>

<script>
import { FilterPanel, Radio, RadioGroup, Input, Switch } from '@opentiny/vue'

export default {
  components: {
    TinyRadio: Radio,
    TinyRadioGroup: RadioGroup,
    TinyFilterPanel: FilterPanel,
    TinyInput: Input,
    TinySwitch: Switch
  },
  data() {
    return {
      tip: '请选择物品数量',
      inputVal: '',
      radioVal: '',
      isBlank: false
    }
  },
  computed: {
    value() {
      return this.radioVal + this.inputVal
    }
  },
  methods: {}
}
</script>
