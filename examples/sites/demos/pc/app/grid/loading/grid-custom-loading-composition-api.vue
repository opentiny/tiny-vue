<template>
  <div>
    <tiny-button @click="init">重试</tiny-button>
    <br /><br />
    <tiny-grid :data="tableData" :loading-component="loadingComponent()" :loading="loading">
      <tiny-grid-column type="index" width="5%"></tiny-grid-column>
      <tiny-grid-column field="name" title="名称" sortable></tiny-grid-column>
      <tiny-grid-column field="city" title="城市" sortable></tiny-grid-column>
    </tiny-grid>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { TinyGrid, TinyGridColumn, TinyButton } from '@opentiny/vue'

const tableData = ref([])
const loading = ref(true)

const init = () => {
  tableData.value = []
  loading.value = true
  setTimeout(() => {
    tableData.value = [
      {
        id: '1',
        name: 'GFD 科技 YX 公司',
        city: '福州'
      },
      {
        id: '2',
        name: 'WWW 科技 YX 公司',
        city: '深圳'
      },
      {
        id: '3',
        name: 'RFV 有限责任公司',
        city: '中山'
      },
      {
        id: '4',
        name: 'TGB 科技 YX 公司',
        city: '龙岩'
      },
      {
        id: '5',
        name: 'YHN 科技 YX 公司',
        city: '韶关'
      }
    ]

    loading.value = false
  }, 2000)
}

init()

const loadingComponent = () => (
  <div class="custom-loading">
    <span>正在加载中...</span>
  </div>
)
</script>

<style scoped>
.custom-loading {
  font-size: 16px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.3);
}
</style>
