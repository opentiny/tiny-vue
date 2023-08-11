<template>
  <tiny-select v-model="value" placeholder="请选择" multiple>
    <tiny-option-group v-for="group in options3" :key="group.label" :label="group.label" :disabled="group.disabled">
      <tiny-option
        v-for="item in group.options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      ></tiny-option>
    </tiny-option-group>
  </tiny-select>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Select as TinySelect, Option as TinyOption, OptionGroup as TinyOptionGroup } from '@opentiny/vue'

const options3 = ref([
  {
    label: '热门城市',
    disabled: true,
    options: [
      { value: 'Shanghai', label: '上海' },
      { value: 'Beijing', label: '北京' }
    ]
  },
  {
    label: '城市名',
    options: [
      { value: 'Chengdu', label: '成都' },
      { value: 'Shenzhen', label: '深圳' },
      { value: 'Guangzhou', label: '广州' },
      { value: 'Dalian', label: '大连' }
    ]
  }
])
const value = ref('')
</script>
