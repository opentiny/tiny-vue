<template>
  <div>
    <tiny-select
      ref="selectRef"
      v-model="value"
      placeholder="请选择"
      filterable
      :filter-method="filter"
      clearable
      allow-copy
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

    <p class="font-style">复制到此处：</p>
    <input class="custom" type="text" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Select as TinySelect, Option as TinyOption } from '@opentiny/vue'

const options = ref([
  { value: '选项1', label: '黄金糕' },
  { value: '选项2', label: '双皮奶' },
  { value: '选项3', label: '蚵仔煎' },
  { value: '选项4', label: '龙须面' },
  { value: '选项5', label: '北京烤鸭' }
])
const value = ref('')
const selectRef = ref()

const filter = (value) => {
  const select = selectRef.value

  if (value) {
    select.state.cachedOptions.forEach((item) => {
      item.state.visible = item.label.includes(value)
    })
  } else {
    select.state.cachedOptions.forEach((item) => {
      item.state.visible = true
    })
  }
}
</script>

<style scoped>
.font-style {
  font-size: 14px;
  margin: 8px;
}
</style>
