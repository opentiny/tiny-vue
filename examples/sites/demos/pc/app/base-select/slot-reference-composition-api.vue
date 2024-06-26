<template>
  <tiny-base-select v-model="value">
    <template #reference>
      <tiny-icon-setting class="custom-reference"></tiny-icon-setting>
    </template>
    <tiny-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </tiny-option>
  </tiny-base-select>
</template>

<script setup>
import { ref } from 'vue'
import { BaseSelect as TinyBaseSelect, Option as TinyOption } from '@opentiny/vue'
import { iconSetting } from '@opentiny/vue-icon'

const TinyIconSetting = iconSetting()

const options = ref([
  { value: '选项1', label: '北京' },
  { value: '选项2', label: '上海' },
  { value: '选项3', label: '天津' },
  { value: '选项4', label: '重庆' },
  { value: '选项5', label: '深圳' }
])
const value = ref('')
</script>
