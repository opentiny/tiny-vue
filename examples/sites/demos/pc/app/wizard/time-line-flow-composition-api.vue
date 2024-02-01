<template>
  <tiny-wizard :data="dataSet" vertical time-line-flow></tiny-wizard>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Wizard as TinyWizard } from '@opentiny/vue'

const dataSet = ref([
  {
    name: '提交',
    status: 'ready',
    imgUrl: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/fruit.jpg`,
    users: 'xiaohong',
    userName: '小红',
    roleNumber: '123456890',
    date: '2013-12-11 20:50',
    values: [
      { text: '部门', value: '某部门' },
      { text: '邮件', value: 'example@example.com' },
      { text: '手机', value: '1234567890' }
    ]
  },
  {
    name: '转他人处理',
    status: 'ready',
    imgUrl: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/fruit.jpg`,
    users: 'xiaohu',
    userName: '小胡',
    roleNumber: ' 123456890',
    date: '2013-12-11 21:50',
    values: [
      { text: '部门', value: '某部门' },
      { text: '邮件', value: 'example@example.com' },
      { text: '手机', value: '1234567890' }
    ]
  },
  {
    name: '主管审批',
    status: 'ready',
    imgUrl: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/fruit.jpg`,
    users: 'xiaozhang',
    userName: '小张',
    roleNumber: '123456890',
    date: '2013-12-14 20:50',
    values: [
      { text: '部门', value: '某部门' },
      { text: '邮件', value: 'example@example.com' },
      { text: '手机', value: '1234567890' }
    ]
  }
])
</script>
