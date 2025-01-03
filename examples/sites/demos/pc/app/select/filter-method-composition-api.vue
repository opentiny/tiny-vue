<template>
  <div>
    <p>场景 1：组件默认过滤</p>
    <br />
    <tiny-select v-model="value1" ref="selectRef" filterable no-match-text="No Match">
      <tiny-option
        v-for="item in options"
        v-show="!item.filter"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </tiny-option>
    </tiny-select>
    <br /><br />
    <p>场景 2：自定义过滤</p>
    <br />
    <tiny-select
      v-model="value2"
      ref="customFilterRef"
      filterable
      :filter-method="customFilterMethod"
      clearable
      no-match-text="No Match"
    >
      <tiny-option
        v-for="item in options"
        v-show="!item.filter"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </tiny-option>
    </tiny-select>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { TinySelect, TinyOption } from '@opentiny/vue'

const options = ref([
  { value: '选项 1', label: '北京' },
  { value: '选项 2', label: '上海' },
  { value: '选项 3', label: '天津' },
  { value: '选项 4', label: '重庆' },
  { value: '选项 5', label: '深圳' }
])
const value1 = ref('')
const value2 = ref('')
const selectRef = ref()
const customFilterRef = ref()

const customFilterMethod = (searchValue) => {
  if (searchValue) {
    customFilterRef.value?.state.cachedOptions.forEach((item) => {
      item.state.visible = item.label.includes(searchValue)
    })
  } else {
    customFilterRef.value?.state.cachedOptions.forEach((item) => {
      item.state.visible = true
    })
  }
}
</script>

<style lang="less" scoped>
.tiny-select {
  width: 280px;
}
p {
  font-size: 14px;
  line-height: 1.5;
}
</style>
