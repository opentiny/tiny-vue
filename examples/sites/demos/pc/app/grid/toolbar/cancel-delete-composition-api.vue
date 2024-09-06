<template>
  <tiny-grid
    :save-data="saveData"
    :fetch-data="fetchData"
    :edit-config="{ trigger: 'click', mode: 'cell', showStatus: true }"
    :pager="pagerConfig"
  >
    <template #toolbar>
      <tiny-grid-toolbar :buttons="toolbarButtons"></tiny-grid-toolbar>
    </template>
    <tiny-grid-column type="index" width="60"></tiny-grid-column>
    <tiny-grid-column type="selection" width="50"></tiny-grid-column>
    <tiny-grid-column type="index" width="60"></tiny-grid-column>
    <tiny-grid-column
      field="name"
      show-overflow
      title="名称"
      :editor="{ component: 'input', autoselect: true }"
    ></tiny-grid-column>
    <tiny-grid-column field="area" title="区域" :editor="{ component: 'input' }"></tiny-grid-column>
    <tiny-grid-column field="address" title="地址" :editor="{ component: 'input' }"></tiny-grid-column>
    <tiny-grid-column
      field="introduction"
      title="公司简介"
      :editor="{ component: 'input', autoselect: true }"
      show-overflow
    ></tiny-grid-column>
  </tiny-grid>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Grid as TinyGrid, GridColumn as TinyGridColumn, Pager, GridToolbar as TinyGridToolbar } from '@opentiny/vue'

const pagerConfig = ref({
  component: Pager,
  attrs: {
    currentPage: 1,
    pageSize: 5,
    pageSizes: [5, 10],
    total: 0,
    layout: 'total, sizes, prev, pager, next, jumper'
  }
})
const fetchData = ref({
  api: getData
})
const saveData = ref({
  api: save
})
const toolbarButtons = ref([
  {
    code: 'save',
    name: '保存'
  },
  {
    code: 'mark_cancel',
    name: '删除/取消删除'
  }
])
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

function getData({ page }) {
  let curPage = page.currentPage
  let pageSize = page.pageSize
  let offset = (curPage - 1) * pageSize

  return new Promise((resolve) => {
    setTimeout(() => {
      let result = tableData.value.slice(offset, offset + pageSize)

      resolve({ result, page: { total: tableData.value.length } })
    }, 500)
  })
}

function save({ changeRecords }) {
  return new Promise((resolve) => {
    // 这里可以写异步保存服务
    // 以下代码仅用于示例展示删除效果，实际需要请求服务
    let pendingRecords = changeRecords.pendingRecords
    let result = tableData.value

    pendingRecords.forEach((element) => {
      let removeIndex = result.findIndex((item) => item.id === element.id)
      result.splice(removeIndex, 1)
    })

    tableData.value = result

    setTimeout(() => {
      resolve(result)
    }, 500)
  })
}
</script>
