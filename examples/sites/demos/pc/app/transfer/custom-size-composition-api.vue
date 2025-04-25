<template>
  <div>
    <tiny-transfer
      v-model="listValue"
      :data="listData"
      filterable
      :panelStyle="panelStyle"
      :panelBodyStyle="panelBodyStyle"
    ></tiny-transfer>
    <br />
    <br />
    <tiny-transfer
      v-model="treeValue"
      :props="{ key: 'id', disabled: 'disabled' }"
      :tree-op="treeConfig"
      filterable
      :data="treeData"
      :render="renderTree"
      :panelStyle="panelStyle"
      :panelBodyStyle="panelBodyStyle"
    ></tiny-transfer>
    <br />
    <br />
    <tiny-transfer
      v-model="gridValue"
      :render="renderGrid"
      :data="gridData"
      filter-placeholder="请输入城市拼音"
      filterable
      :props="{ key: 'id', disabled: 'disabled' }"
      :columns="columns"
      :pager-op="pagerOp"
      :show-pager="true"
      :filter-method="filterMethod"
      :panelStyle="panelStyle"
      :panelBodyStyle="panelBodyStyle"
      :panelTableHeight="panelTableHeight"
    ></tiny-transfer>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { TinyTransfer, TinyTable, TinyTree } from '@opentiny/vue'

const generateData = () => {
  const data = []

  for (let i = 0; i <= 15; i++) {
    data.push({
      key: i,
      label: `备选项 ${i}`
    })
  }

  return data
}
const getGridData = () => {
  const data = []

  for (let i = 1; i <= 10; i++) {
    data.push({
      id: i.toString(),
      name: 'GFD 科技 YX 公司 ' + i,
      area: '华东区 ' + i,
      disabled: i % 4 === 0
    })
  }

  return data
}
// 自定义面板样式
const panelStyle = ref({ width: '650px' })
const panelBodyStyle = ref({ height: '200px' })
const panelTableHeight = ref('700px')

// 列表示例
const listData = ref(generateData())
const listValue = ref([1, 4])

// tree 示例
const treeValue = ref([3, 4, 5])
const renderTree = ref({
  plugin: TinyTree
})
const treeData = ref([
  {
    id: 1,
    label: '一级 1',
    children: [
      {
        id: 4,
        label: '二级 1-1',
        children: [
          {
            id: 9,
            label: '三级 1-1-1'
          },
          {
            id: 10,
            label: '三级 1-1-2'
          }
        ]
      }
    ]
  },
  {
    id: 2,
    label: '一级 2',
    children: [
      {
        id: 5,
        label: '二级 2-1'
      },
      {
        id: 6,
        label: '二级 2-2',
        disabled: true
      }
    ]
  },
  {
    id: 3,
    label: '一级 3',
    children: [
      {
        id: 7,
        label: '二级 3-1',
        disabled: true
      },
      {
        id: 8,
        label: '二级 3-2'
      }
    ]
  }
])
const treeConfig = ref({
  showLine: true,
  showCheckbox: true,
  nodeKey: 'id',
  checkStrictly: true,
  filterNodeMethod(query, data) {
    return data.label.includes(query)
  }
})

// grid 示例
const renderGrid = ref({
  plugin: TinyTable
})
const gridValue = ref(['5', '6', '10'])
const gridData = ref(getGridData())
const columns = ref([
  {
    type: 'index',
    width: '30px'
  },
  {
    type: 'selection',
    width: '30px'
  },
  {
    field: 'name',
    title: '名称'
  },
  {
    field: 'area',
    title: '所属区域'
  }
])
const pagerOp = ref({
  pageVO: {
    pageSizes: [10, 20, 30],
    pageSize: 10
  }
})
function filterMethod(query, item) {
  return item.name.includes(query)
}
</script>
