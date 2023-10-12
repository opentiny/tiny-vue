<template>
  <tiny-grid ref="gridRef" :fetch-data="fetchData" :pager="pagerConfig">
    <tiny-grid-column type="index" width="60"></tiny-grid-column>
    <tiny-grid-column field="name" title="名称">
      <template #default="{ row, skip }">
        <span v-if="!skip">{{ row.name.value }}</span>
      </template>
    </tiny-grid-column>
    <tiny-grid-column field="area" title="所属区域"></tiny-grid-column>
    <tiny-grid-column field="address" title="地址"></tiny-grid-column>
    <tiny-grid-column field="introduction" title="公司简介" show-overflow></tiny-grid-column>
  </tiny-grid>
</template>

<script setup>
import { ref } from 'vue'
import { Grid as TinyGrid, GridColumn as TinyGridColumn, Pager } from '@opentiny/vue'

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
    name: { value: 'GFD科技有限公司' },
    area: '华东区',
    address: '福州',
    introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
  },
  {
    id: '2',
    name: { value: 'WWWW科技有限公司' },
    area: '华南区',
    address: '深圳福田区',
    introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
  },
  {
    id: '3',
    name: { value: 'RFV有限责任公司' },
    area: '华南区',
    address: '中山市',
    introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
  }
])

function getData({ page, filterArgs }) {
  let curPage = page.currentPage
  let pageSize = page.pageSize
  let offset = (curPage - 1) * pageSize

  return new Promise((resolve) => {
    setTimeout(() => {
      let result = tableData.value.slice(0)
      let total = tableData.value.length

      if (filterArgs) {
        result = result.filter((item) => item.area === filterArgs)
        total = result.length
      }

      result = result.slice(offset, offset + pageSize)

      resolve({ result, page: { total } })
    }, 500)
  })
}
</script>
