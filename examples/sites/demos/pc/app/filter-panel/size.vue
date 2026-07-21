<template>
  <div>
    <div class="mb10">
      <span class="label">选择尺寸：</span>
      <tiny-radio-group v-model="currentSize">
        <tiny-radio label="">默认 (default)</tiny-radio>
        <tiny-radio label="medium">中等 (medium)</tiny-radio>
      </tiny-radio-group>
    </div>
    <div class="box">
      <tiny-filter-panel
        ref="filterPanel"
        label="物品数量"
        :value="value"
        :size="currentSize"
        @handle-clear="handleClear"
      >
        <tiny-radio-group v-model="radioVal" size="mini">
          <tiny-radio label="大于">大于</tiny-radio>
          <tiny-radio label="等于">等于</tiny-radio>
          <tiny-radio label="小于">小于</tiny-radio>
        </tiny-radio-group>
        <tiny-input type="text" v-model="inputVal" style="margin-top: 20px"></tiny-input>
      </tiny-filter-panel>
    </div>
  </div>
</template>

<script>
import { TinyFilterPanel, TinyRadio, TinyRadioGroup, TinyInput } from '@opentiny/vue'

export default {
  components: {
    TinyRadio,
    TinyRadioGroup,
    TinyFilterPanel,
    TinyInput
  },
  data() {
    return {
      inputVal: '',
      radioVal: '',
      currentSize: '' // 默认尺寸
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
    }
  }
}
</script>

<style scoped>
.box {
  display: flex;
}
.label {
  margin-right: 10px;
  font-weight: bold;
}
</style>
