<template>
  <div>
    <tiny-filter-panel ref="filterPanel" label="物品数量" @handle-clear="handleClear" :value="value">
      <tiny-radio-group v-model="radioVal" size="mini">
        <tiny-radio label="大于">大于</tiny-radio>
        <tiny-radio label="等于">等于</tiny-radio>
        <tiny-radio label="小于">小于</tiny-radio>
      </tiny-radio-group>
      <tiny-input type="text" v-model="inputVal" style="margin: 20px 0"></tiny-input>
      <tiny-button @click="hide">确定</tiny-button>
    </tiny-filter-panel>
  </div>
</template>

<script>
import { FilterPanel, Radio, RadioGroup, Input, Button } from '@opentiny/vue'

export default {
  components: {
    TinyRadio: Radio,
    TinyRadioGroup: RadioGroup,
    TinyFilterPanel: FilterPanel,
    TinyButton: Button,
    TinyInput: Input
  },
  data() {
    return {
      inputVal: '',
      radioVal: ''
    }
  },
  computed: {
    value() {
      return this.radioVal + this.inputVal
    }
  },
  methods: {
    handleClear() {
      this.radioVal = ''
      this.inputVal = ''
    },
    hide() {
      this.$refs.filterPanel.hide()
    }
  }
}
</script>
