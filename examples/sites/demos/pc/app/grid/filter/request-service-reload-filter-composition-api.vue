<template>
  <div>
    <div class="tiny-demo-flex">
      <div class="tiny-demo-label">前端过滤示例</div>
      <tiny-button @click="relaodData">Relaod数据</tiny-button>
    </div>
    <tiny-grid ref="gridFilter" :fetch-data="fetchData" :pager="pagerConfig">
      <tiny-grid-column type="index" width="60"></tiny-grid-column>
      <tiny-grid-column field="name" title="名称" :filter="nameFilter"></tiny-grid-column>
      <tiny-grid-column field="area" title="所属区域"></tiny-grid-column>
      <tiny-grid-column field="address" title="地址"></tiny-grid-column>
      <tiny-grid-column field="introduction" title="公司简介" show-overflow></tiny-grid-column>
    </tiny-grid>
    <br />
    <br />
    <div class="tiny-demo-flex">
      <div class="tiny-demo-label">后端过滤示例</div>
      <tiny-button @click="relaodRemoteData">Relaod数据</tiny-button>
    </div>
    <tiny-grid ref="gridRemoteFilter" :fetch-data="fetchData" :pager="pagerConfig" remote-filter>
      <tiny-grid-column type="index" width="60"></tiny-grid-column>
      <tiny-grid-column field="name" title="名称" :filter="nameFilter"></tiny-grid-column>
      <tiny-grid-column field="area" title="所属区域"></tiny-grid-column>
      <tiny-grid-column field="address" title="地址"></tiny-grid-column>
      <tiny-grid-column field="introduction" title="公司简介" show-overflow></tiny-grid-column>
    </tiny-grid>
  </div>
</template>

<script setup>
import { Grid as TinyGrid, GridColumn as TinyGridColumn, Pager, Button as TinyButton } from '@opentiny/vue'
import { ref } from 'vue'

const tableData = ref([
  {
    id: '1',
    name: 'GFD科技有限公司',
    area: '华东区',
    address: '福州',
    introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
  },
  {
    id: '2',
    name: 'WWWW科技有限公司',
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
    name: 'TGB有限公司',
    area: '华北区',
    address: '梅州',
    introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
  },
  {
    id: '5',
    name: 'YHN科技有限公司',
    area: '华南区',
    address: '韶关',
    introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
  },
  {
    id: '6',
    name: 'KANG物业有限公司',
    area: '华北区',
    address: '广州天河区',
    introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
  }
])

const gridFilter = ref('gridFilter')
const gridRemoteFilter = ref('gridRemoteFilter')

const nameFilter = {
  inputFilter: { relation: 'contains' },
  enumable: false,
  defaultFilter: true
}
const pagerConfig = {
  component: Pager,
  attrs: {
    currentPage: 1,
    pageSize: 5,
    pageSizes: [5, 10]
  }
}

const getData = ({ page, filters }) => {
  console.log('filters', filters)
  let currentPage = page.currentPage
  let pageSize = page.pageSize
  let offset = (currentPage - 1) * pageSize

  return new Promise((resolve) => {
    setTimeout(() => {
      let total = tableData.value.length
      let result = tableData.value.slice(offset, offset + pageSize)

      resolve({ result, page: { total } })
    }, 500)
  })
}

const relaodData = () => {
  gridFilter.value.handleFetch('reload')
}

const relaodRemoteData = () => {
  gridRemoteFilter.value.handleFetch('reload')
}

const fetchData = {
  api: getData,
  // 重新加载数据配置
  reloadConfig: {
    // 在重新加载数据时，保持表格过滤
    filter: true
  }
}
</script>

<style scoped>
.tiny-demo-flex {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 10px;
}
.tiny-demo-label {
  margin-right: 16px;
}
</style>
