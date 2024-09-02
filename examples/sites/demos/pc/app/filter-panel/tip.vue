<template>
  <div>
    <div class="mb10">
      <tiny-switch v-model="isBlank"></tiny-switch><span class="ml10">{{ isBlank ? '透明' : '非透明' }}</span>
    </div>
    <div class="box">
      <tiny-filter-panel ref="filterPanel" label="物品数量" :tip="tip" :clearable="false" :blank="isBlank">
        <tiny-radio-group v-model="radioVal" size="mini">
          <tiny-radio label="大于">大于</tiny-radio>
          <tiny-radio label="等于">等于</tiny-radio>
          <tiny-radio label="小于">小于</tiny-radio>
        </tiny-radio-group>
        <tiny-input
          type="text"
          v-model="inputVal"
          style="margin-top: 16px"
          @change="handleChange"
          placeholder="选择属性筛选，或输入关键字搜索"
        ></tiny-input>
      </tiny-filter-panel>
      <tiny-tag v-for="(tag, index) in tags" :key="tag" closable @close="handleClose(index)">{{ tag }}</tiny-tag>
    </div>
  </div>
</template>

<script>
import { FilterPanel, Radio, RadioGroup, Input, Switch, Tag } from '@opentiny/vue'

export default {
  components: {
    TinyRadio: Radio,
    TinyRadioGroup: RadioGroup,
    TinyFilterPanel: FilterPanel,
    TinyInput: Input,
    TinySwitch: Switch,
    TinyTag: Tag
  },
  data() {
    return {
      tip: '请选择物品数量',
      inputVal: '',
      radioVal: '',
      isBlank: false,
      tags: ['输入框关键字']
    }
  },
  methods: {
    handleChange() {
      this.tags.push(`${this.radioVal}${this.inputVal}`)
    },
    handleClose(i) {
      this.tags.splice(i, 1)
    }
  }
}
</script>

<style scoped>
.box {
  display: flex;
}
.tiny-tag {
  margin-left: 4px;
}
</style>
