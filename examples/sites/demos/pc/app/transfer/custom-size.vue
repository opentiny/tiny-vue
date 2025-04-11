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

<script lang="jsx">
import { TinyTransfer, TinyTable, TinyTree } from '@opentiny/vue'

export default {
  components: {
    TinyTransfer
  },
  data() {
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
    return {
      // 自定义面板样式
      panelStyle: {
        width: '650px'
      },
      panelBodyStyle: {
        height: '200px'
      },
      panelTableHeight: '700px',
      // 列表示例
      listData: generateData(),
      listValue: [1, 4],
      // tree 示例
      treeValue: [3, 4, 5],
      renderTree: {
        plugin: TinyTree
      },
      treeData: [
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
      ],
      treeConfig: {
        showLine: true,
        showCheckbox: true,
        nodeKey: 'id',
        checkStrictly: true,
        filterNodeMethod(query, data) {
          return data.label.includes(query)
        }
      },

      // grid 示例
      renderGrid: {
        plugin: TinyTable
      },
      gridValue: ['5', '6', '10'],
      gridData: getGridData(),
      columns: [
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
      ],
      pagerOp: {
        pageVO: {
          pageSizes: [10, 20, 30],
          pageSize: 10
        }
      },
      filterMethod(query, item) {
        return item.name.includes(query)
      }
    }
  }
}
</script>
