<template>
  <div class="wrap">
    <div class="demo-top mb10">
      <tiny-switch v-model="isAffix"></tiny-switch>
      <span>{{ isAffix ? '固定模式' : '非固定模式' }}</span>
    </div>
    <tiny-anchor :links="links" :is-affix="isAffix"></tiny-anchor>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Anchor as TinyAnchor, Switch as TinySwitch } from '@opentiny/vue'

const isAffix = ref(false)
const links = ref([
  {
    key: 'demonstrate',
    link: '#demonstrate',
    title: '演示',
    children: [
      {
        key: 'basic-usage',
        link: '#basic-usage',
        title: '基本用法'
      },
      {
        key: 'is-affix',
        link: '#is-affix',
        title: '固定模式'
      },
      {
        key: 'set-container',
        link: '#set-container',
        title: '滚动容器'
      },
      {
        key: 'on-change',
        link: '#change',
        title: 'change 事件'
      }
    ]
  },
  {
    key: 'api',
    link: '#API',
    title: 'API'
  }
])
</script>

<style scoped>
.wrap {
  min-height: 180px;
}
.demo-top {
  display: flex;
  align-items: center;
}
</style>
