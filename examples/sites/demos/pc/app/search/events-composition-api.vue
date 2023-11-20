<template>
  <div>
    <p>搜索事件</p>
    <tiny-search @search="search" is-enter-search></tiny-search>
    <p>值变化事件</p>
    <tiny-search @change="change" @input="input"></tiny-search>
    <p>类型选中事件</p>
    <tiny-search :search-types="searchTypes" @select="select"></tiny-search>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Search as TinySearch, Modal } from '@opentiny/vue'

const searchTypes = ref([
  {
    text: '找人',
    value: 1
  },
  {
    text: '找文档',
    value: 2
  },
  {
    text: '找谁',
    value: 3
  }
])

function search(key, value) {
  Modal.message(`${value}`)
}

function change(key, value) {
  Modal.message(`change: ${value}`)
}

function input(key, value) {
  Modal.message(`input: ${key}, ${JSON.stringify(value)}`)
}

function select(value) {
  Modal.message({ message: `${value.text}`, status: 'info' })
}
</script>
