<template>
  <div>
    <tiny-grid
      :data="tableData"
      ref="tree"
      :tree-config="{ children: 'children' }"
      :edit-config="{ trigger: 'click', mode: 'cell', showStatus: true }"
      :select-config="{ labelField: 'index' }"
    >
      <template #toolbar>
        <tiny-grid-toolbar class="customizedBox">
          <template #buttons>
            <tiny-button @click="insertEvent">
              新增
            </tiny-button>
            <tiny-button @click="removeEvent">
              移除选中
            </tiny-button>
            <tiny-button @click="getRemoveEvent">
              获取删除
            </tiny-button>
            <tiny-button @click="getUpdateEvent">
              获取修改
            </tiny-button>
            <tiny-button @click="clearTreeExpand">
              清空展开状态
            </tiny-button>
          </template>
        </tiny-grid-toolbar>
      </template>
      <tiny-grid-column type="selection" width="100" tree-node></tiny-grid-column>
      <tiny-grid-column type="index" width="80"></tiny-grid-column>
      <tiny-grid-column field="name" title="公司名称"></tiny-grid-column>
      <tiny-grid-column field="area" title="区域" :editor="{ component: 'input', autoselect: true }"></tiny-grid-column>
      <tiny-grid-column field="employees" title="员工数" :editor="{ component: 'input', autoselect: true }"></tiny-grid-column>
    </tiny-grid>
  </div>
</template>

<script lang="jsx">
import { Grid, GridColumn, Button, GridToolbar, Modal } from '@opentiny/vue'

function canRemove(node, nodes) {
  let flag = false

  for (let i = 0; i < nodes.length; i++) {
    flag = nodes[i] === node || (nodes[i].id && node.id && nodes[i].id === node.id)
    if (flag) break
  }

  return flag
}

function pushIfNotNull(array, item) {
  if (item !== null) array.push(item)
}

function copyCannotRemove(node, nodes) {
  let copyNode

  if (canRemove(node, nodes)) {
    copyNode = null
  } else {
    if (Array.isArray(node.children)) {
      let children = []

      for (let i = 0; i < node.children.length; i++) {
        pushIfNotNull(children, copyCannotRemove(node.children[i], nodes))
      }
      copyNode = Object.assign(Object.assign({}, node), {
        id: node.id || undefined,
        children
      })
    } else {
      copyNode = Object.assign(Object.assign({}, node), {
        id: node.id || undefined,
        children: undefined
      })
    }
  }

  return copyNode
}

function copy(nodes1, nodes2) {
  let res = []

  for (let i = 0; i < nodes1.length; i++) {
    pushIfNotNull(res, copyCannotRemove(nodes1[i], nodes2))
  }

  return res
}

export default {
  components: {
    TinyGrid: Grid,
    TinyGridColumn: GridColumn,
    TinyButton: Button,
    TinyGridToolbar: GridToolbar
  },
  data() {
    return {
      tableData: [
        {
          id: '1',
          pid: '0',
          name: 'GFD科技YX公司',
          area: '华东区',
          employees: '800',
          children: [
            {
              id: '15',
              pid: '1',
              name: 'GFD科技股份有限子公司',
              area: '华东区',
              employees: '700'
            }
          ]
        },
        {
          id: '2',
          pid: '0',
          name: 'WWWW科技YX公司',
          area: '华南区',
          employees: '500',
          children: [
            {
              id: '22',
              pid: '2',
              name: 'WWWW科技股份有限子公司',
              area: '华南区',
              employees: '720'
            }
          ]
        },
        {
          id: '4',
          pid: '0',
          name: 'TGBYX公司',
          area: '华南区',
          employees: '360',
          children: [
            {
              id: '3',
              pid: '4',
              name: 'RFV有限责任公司',
              area: '华南区',
              employees: '300'
            },
            {
              id: '5',
              pid: '4',
              name: 'YHN科技YX公司',
              area: '华南区',
              employees: '810',
              children: [
                {
                  id: '6',
                  pid: '5',
                  name: 'WSX科技YX公司',
                  area: '华南区',
                  employees: '800'
                },
                {
                  id: '9',
                  pid: '5',
                  name: 'UJM有限责任公司',
                  area: '华南区',
                  employees: '750'
                }
              ]
            }
          ]
        },
        {
          id: '7',
          pid: '0',
          name: '康康物业YX公司',
          area: '华南区',
          employees: '400',
          children: [
            {
              id: '8',
              pid: '7',
              name: '深圳市福德宝网络技术YX公司',
              area: '华南区',
              employees: '540'
            },
            {
              id: '10',
              pid: '7',
              name: 'IK有限责任公司',
              area: '华南区',
              employees: '400',
              children: [
                {
                  id: '23',
                  pid: '10',
                  name: 'IK有限责任股份YX公司',
                  area: '华南区',
                  employees: '455'
                }
              ]
            }
          ]
        }
      ],
      removeList: []
    }
  },
  methods: {
    insertEvent() {
      let tree = this.$refs.tree
      const row = {
        name: '新数据',
        isNew: true,
        children: [{
          name: '新数据-child',
        }]
      }
      tree
        .createRow(row)
        .then((newRow) => {
          // 插入到第一行
          this.tableData = [newRow, ...this.tableData]
          let activeRow = this.tableData[0]
          tree.refreshData().then(() => tree.setActiveRow(activeRow))
        })
    },
    removeEvent() {
      const isSameObject = (obj1, obj2) => JSON.stringify(obj1) === JSON.stringify(obj2)
      let tree = this.$refs.tree

      let removeRecords = tree.getSelectRecords()

      let tableData = this.tableData

      this.tableData = copy(tableData, removeRecords)
      for (let i = 0; i < this.tableData.length; i++) {
        for (let j = 0; j < removeRecords.length; j++) {
          if (isSameObject(this.tableData[i], removeRecords[j])) {
            this.tableData.splice(i, 1)
          }
        }
      }
      this.removeList = removeRecords.map((item) => ({ ...item }))
    },

    getRemoveEvent() {
      let removeRecords = this.removeList

      Modal.alert(removeRecords.length)
    },
    getUpdateEvent() {
      let updateRecords = this.$refs.tree.getUpdateRecords()

      Modal.alert(updateRecords.length)
    },
    clearTreeExpand() {
      this.$refs.tree.clearTreeExpand()
    }
  }
}
</script>
