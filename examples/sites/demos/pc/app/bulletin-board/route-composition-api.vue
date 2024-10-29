<template>
  <tiny-bulletin-board :tab-title="tabTitle" :data="data"></tiny-bulletin-board>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { TinyBulletinBoard } from '@opentiny/vue'

const tabTitle = ref(['页面跳转'])
const data = ref([
  [
    {
      text: '基于 route',
      date: '2019-06-11',
      route: '#/Alert'
    }
  ]
])
</script>
