<template>
  <div>
    <tiny-grid
      :fetch-data="fetchData"
      row-id="id"
      seq-serial
      :pager="pagerConfig"
      @select-change="selectedDevices"
      :select-config="tableSelectConfigData"
    >
      <tiny-grid-column type="selection" width="60"></tiny-grid-column>
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
import { Grid as TinyGrid, GridColumn as TinyGridColumn, Pager, Notify } from '@opentiny/vue'

const tableSelectConfigData = ref({
  // 翻页时记住选择项，必须同时配置row-id
  reserve: true,
  checkMethod({ row }) {
    // 返回true表示可以选择，否则禁用
    return true
  }
})
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

function getTableData() {
  return [
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
    },
    {
      id: '7',
      name: '深圳市福德宝网络技术YX公司',
      area: '华南区',
      address: '清远',
      introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
    },
    {
      id: '8',
      name: '西安门福德宝网络技术YX公司',
      area: '华东区',
      address: '厦门',
      introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
    },
    {
      id: '9',
      name: 'WWWW科技股份有限子公司',
      area: '华南区',
      address: '韶关',
      introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
    },
    {
      id: '10',
      name: 'WSX科技YX公司',
      area: '华南区',
      address: '广州',
      introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
    }
  ]
}

function getData({ page }) {
  let curPage = page.currentPage
  let pageSize = page.pageSize
  let offset = (curPage - 1) * pageSize

  return new Promise((resolve) => {
    resolve({
      result: getTableData().slice(offset, offset + pageSize),
      page: { total: getTableData().length }
    })
  })
}

function selectedDevices({ $table }) {
  Notify({
    type: 'info',
    title: '获取选中的所有数据',
    message: JSON.stringify($table.selection),
    position: 'top-right',
    duration: 3000
  })
}
</script>
