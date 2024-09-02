<template>
  <div>
    <div class="mb10">
      <tiny-switch v-model="isBlank"></tiny-switch><span class="ml10">{{ isBlank ? '透明' : '非透明' }}</span>
    </div>
    <div class="box">
      <tiny-filter-panel
        ref="filterPanel"
        label="物品数量"
        :tip="tip"
        :clearable="false"
        :blank="isBlank"
        placeholder="选择属性筛选，或输入关键字搜索"
      >
        <tiny-radio-group v-model="radioVal" size="mini">
          <tiny-radio label="大于">大于</tiny-radio>
          <tiny-radio label="等于">等于</tiny-radio>
          <tiny-radio label="小于">小于</tiny-radio>
        </tiny-radio-group>
        <tiny-input type="text" v-model="inputVal" style="margin-top: 16px" @change="handleChange"></tiny-input>
      </tiny-filter-panel>
      <tiny-tag v-for="(tag, index) in tags" :key="tag" closable @close="handleClose(index)">{{ tag }}</tiny-tag>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import {
  FilterPanel as TinyFilterPanel,
  Radio as TinyRadio,
  RadioGroup as TinyRadioGroup,
  Input as TinyInput,
  Switch as TinySwitch,
  Tag as TinyTag
} from '@opentiny/vue'

const tip = ref('请选择物品数量')
const inputVal = ref('')
const radioVal = ref('')
const isBlank = ref(false)
const tags = ref(['输入框关键字'])

const handleChange = () => {
  tags.value.push(`${radioVal.value}${inputVal.value}`)
}

const handleClose = (i) => {
  tags.value.splice(i, 1)
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
