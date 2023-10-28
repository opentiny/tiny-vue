<template>
  <tiny-bulletin-board :tab-title="tabTitle" :data="data"></tiny-bulletin-board>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { BulletinBoard as TinyBulletinBoard } from '@opentiny/vue'

const tabTitle = ref(['页面跳转'])
const data = ref([
  [
    {
      text: '基于 url',
      date: '2019-07-31',
      url: 'localhost:3000/#/webcore/zh-CN/guide/changelog',
      target: '_blank'
    }
  ]
])
</script>
