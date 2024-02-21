<template>
  <div>
    <tiny-button @click="reLoad">刷新</tiny-button>
    <tiny-grid ref="gridRef" :fetch-data="fetchData" :pager="pagerConfig" :loading="loading">
      <template #toolbar>
        <tiny-grid-toolbar refresh></tiny-grid-toolbar>
      </template>
      <tiny-grid-column type="index" width="60"></tiny-grid-column>
      <tiny-grid-column type="index" width="60"></tiny-grid-column>
      <tiny-grid-column field="name" title="名称"></tiny-grid-column>
      <tiny-grid-column field="area" title="所属区域"></tiny-grid-column>
      <tiny-grid-column field="address" title="地址"></tiny-grid-column>
      <tiny-grid-column field="introduction" title="公司简介" show-overflow></tiny-grid-column>
    </tiny-grid>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import {
  Grid as TinyGrid,
  GridColumn as TinyGridColumn,
  Pager,
  GridToolbar as TinyGridToolbar,
  Button as TinyButton
} from '@opentiny/vue'

const loading = ref(true)
const pagerConfig = ref({
  component: Pager,
  attrs: {
    currentPage: 1,
    pageSize: 5,
    pageSizes: [5, 10],
    total: 0,
    layout: 'total, prev, pager, next, jumper, sizes'
  }
})
const fetchData = ref({
  api: getData
})
const tableData = ref([
  {
    id: '1',
    name: 'GFD科技YX公司',
    area: '华东区',
    address: '福州',
    introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
  },
  {
    id: '2',
    name: 'WWWW科技YX公司',
    area: '华南区',
    address: '深圳福田区',
    introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
  },
  {
    id: '3',
    name: 'RFV有限责任公司',
    area: '华南区',
    address: '中山市',
    introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
  },
  {
    id: '4',
    name: 'TGBYX公司',
    area: '华北区',
    address: '梅州',
    introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
  },
  {
    id: '5',
    name: 'YHN科技YX公司',
    area: '华南区',
    address: '韶关',
    introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
  },
  {
    id: '6',
    name: '康康物业YX公司',
    area: '华北区',
    address: '广州天河区',
    introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
  }
])
const gridRef = ref()

function getData({ page }) {
  let curPage = page.currentPage
  let pageSize = page.pageSize
  let offset = (curPage - 1) * pageSize
  loading.value = true

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        result: tableData.value.slice(offset, offset + pageSize),
        page: { total: tableData.value.length }
      })
      loading.value = false
    }, 1000)
  })
}

function reLoad() {
  gridRef.value.handleFetch('reload')
}
</script>
