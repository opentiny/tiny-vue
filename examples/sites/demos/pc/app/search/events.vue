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

<script lang="jsx">
import { Search, Modal } from '@opentiny/vue'

export default {
  components: {
    TinySearch: Search
  },
  data() {
    return {
      searchTypes: [
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
      ]
    }
  },
  methods: {
    search(key, value) {
      Modal.message(`${value}`)
    },
    change(key, value) {
      Modal.message(`change: ${value}`)
    },
    input(key, value) {
      Modal.message(`input: ${key}, ${JSON.stringify(value)}`)
    },
    select(value) {
      Modal.message({ message: `${value.text}`, status: 'info' })
    }
  }
}
</script>
