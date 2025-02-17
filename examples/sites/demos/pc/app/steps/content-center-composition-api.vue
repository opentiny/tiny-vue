<template>
  <tiny-steps ref="steps" advanced content-center flex :data="data" :active="advancedActive"></tiny-steps>
</template>

<script setup>
import { ref } from 'vue'
import { TinySteps } from '@opentiny/vue'

const advancedActive = ref(2)
const data = ref([
  {
    name: '默认',
    status: '',
    description:
      'Optional Optional Optional Optional Optional Optional Optional Optional Optional Optional Optional Optional Optional Optional Optional Optional Optional Optional Optional Optional Optional Optional Optional Optional '
  },
  { name: '已完成', status: 'done', description: 'done 已完成' },
  { name: '进行中', status: 'doing', description: 'doing 进行中' },
  { name: '错误', status: 'error', description: 'error 错误' },
  {
    name: '已禁用',
    status: 'disabled',
    description:
      'disabled 已禁用，描述内容描述内容，超出部分隐藏，描述内容，超出部分隐藏，描述内容，超出部分隐藏，描述内容，超出部分隐藏'
  }
])
</script>
