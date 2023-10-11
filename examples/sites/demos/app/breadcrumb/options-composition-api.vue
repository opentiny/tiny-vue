<template>
  <div>
    <tiny-breadcrumb :options="options" @select="itemClick"></tiny-breadcrumb>
    <tiny-breadcrumb :options="options1" text-field="name" @select="itemClick"></tiny-breadcrumb>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Breadcrumb as TinyBreadcrumb, Notify } from '@opentiny/vue'

const options = ref([
  {
    label: '首页',
    to: { path: '/' }
  },
  {
    label: '产品',
    to: { path: '/breadcrumb' }
  },
  {
    label: '软件',
    replace: true
  }
])
const options1 = ref([
  {
    name: '首页',
    to: { path: '/' }
  },
  {
    name: '产品',
    to: { path: '/breadcrumb' }
  },
  {
    name: '软件',
    replace: true
  }
])

function itemClick(value) {
  Notify({
    type: 'info',
    title: '触发选择面包屑事件',
    message: JSON.stringify(value),
    position: 'top-right',
    duration: 2000
  })
}
</script>

<style scoped>
.tiny-breadcrumb {
  margin-top: 20px;
}
</style>
