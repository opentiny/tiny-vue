<template>
  <div>
    <tiny-button @click="init">重试</tiny-button>
    <br /><br />
    <tiny-grid :data="tableData" :loading="loading">
      <tiny-grid-column type="index" width="5%"></tiny-grid-column>
      <tiny-grid-column field="name" title="名称" sortable></tiny-grid-column>
      <tiny-grid-column field="city" title="城市" sortable></tiny-grid-column>
    </tiny-grid>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Grid as TinyGrid, GridColumn as TinyGridColumn, Button as TinyButton } from '@opentiny/vue'

const tableData = ref([])
const loading = ref(true)

init()

function init() {
  tableData.value = []
  loading.value = true
  setTimeout(() => {
    tableData.value = [
      {
        id: '1',
        name: 'GFD科技YX公司',
        city: '福州'
      },
      {
        id: '2',
        name: 'WWW科技YX公司',
        city: '深圳'
      },
      {
        id: '3',
        name: 'RFV有限责任公司',
        city: '中山'
      },
      {
        id: '4',
        name: 'TGB科技YX公司',
        city: '龙岩'
      },
      {
        id: '5',
        name: 'YHN科技YX公司',
        city: '韶关'
      }
    ]
    loading.value = false
  }, 2000)
}
</script>
