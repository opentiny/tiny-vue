<template>
  <tiny-anchor :links="links" @change="handleChange"></tiny-anchor>
</template>

<script setup>
import { ref } from 'vue'
import { Anchor as TinyAnchor, Modal } from '@opentiny/vue'

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

function handleChange(link) {
  Modal.message({ message: `change${link}`, status: 'info' })
}
</script>
