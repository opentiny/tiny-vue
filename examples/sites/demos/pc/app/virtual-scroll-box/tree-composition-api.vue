<template>
  <tiny-virtual-scroll-box ref="vsBoxVm" v-bind="config" @change="onVsChange">
    <template v-if="renderRows.length > 0">
      <tiny-tree
        ref="treeVm"
        :will-change-view="false"
        :data="treeData"
        :node-key="nodeKey"
        :default-expanded-keys="treeExpandeds"
        :style="{ transform: rowOffset }"
        @node-expand="onExpandChange"
        @node-collapse="onExpandChange"
      ></tiny-tree>
    </template>
  </tiny-virtual-scroll-box>
</template>

<script setup>
import { provide, ref, reactive, nextTick, onBeforeMount } from 'vue'
import { VirtualScrollBox as TinyVirtualScrollBox, Tree as TinyTree } from '@opentiny/vue'

const config = reactive({
  width: 600,
  height: 400,
  rowBuffer: 120,
  columnBuffer: 240,
  columns: [],
  columnSizes: [],
  rows: [],
  rowSizes: [],
  fixedColumns: [[], []], // 没有列冻结
  fixedRows: [[], []], // 没有行冻结
  spanConfig: [[]] // 没有合并
})
const treeData = ref([])
const treeExpandeds = ref([1, 21]) // 树默认展开项的id
const rowOffset = ref('')
const nodeKey = 'id'
const rowHeight = 36
const renderRows = ref([])
const vsBoxVm = ref('vsBoxVm')
const treeVm = ref('treeVm')

provide('TreeAdapter', { shouldRender: (node) => renderRows.value.includes(node.data) })

const onExpandChange = () => {
  nextTick(() => {
    const expandeds = []

    const traverse = (childNodes) => {
      if (Array.isArray(childNodes) && childNodes.length > 0) {
        childNodes.forEach((node) => {
          if (node.expanded) {
            expandeds.push(node.data[nodeKey])
            traverse(node.childNodes)
          }
        })
      }
    }

    traverse(treeVm.value.state.root.childNodes)

    treeExpandeds.value = expandeds
    flattenTreeData()

    nextTick(() => {
      vsBoxVm.value.refresh()
    })
  })
}

const onVsChange = ({ viewRows }) => {
  const rows = []
  viewRows.forEach((viewRow) => {
    viewRow.info.raw.forEach((treeRow) => {
      if (!rows.includes(treeRow)) {
        rows.push(treeRow)
      }
    })
  })

  renderRows.value = rows

  const firstViewRow = viewRows[0]
  const translateYValue = firstViewRow.info.offset - (firstViewRow.info.raw.length - 1) * rowHeight

  rowOffset.value = `translateY(${translateYValue}px)`
}

const flattenTreeData = () => {
  const chart = []
  const stack = []

  const flatChart = (treeData) => {
    if (Array.isArray(treeData) && treeData.length > 0) {
      treeData.forEach((item) => {
        chart.push([...stack, item])

        if (treeExpandeds.value.includes(item[nodeKey])) {
          stack.push(item)
          flatChart(item.children)
          stack.pop(item)
        }
      })
    }
  }

  // 平铺树形数据
  flatChart(treeData.value)

  config.rows = chart
  config.rowSizes = chart.map(() => rowHeight) // 树的每一项高度

  // 这两项没有实际作用，只是为了保证组件正常工作
  config.columns = ['c-1'] // 只有1列
  config.columnSizes = [config.width - 17] // 这个列的宽度为 `虚滚区域宽度` 减去 `垂直滚动条宽度`
}

const genTreeData = () => {
  const treeDatas = []
  let id = 0

  const genItem = (total, level, array) => {
    for (let i = 0; i < total; i++) {
      const itemId = ++id

      array.push({
        [nodeKey]: itemId,
        label: `item-${itemId}`
      })
    }

    level--

    if (level > 0) {
      const temp = []

      array[0].children = temp
      array = temp

      genItem(total, level, array)
    }
  }

  // 生成 10000 条数据
  genItem(500, 20, treeDatas)

  treeData.value = treeDatas
}

onBeforeMount(() => {
  genTreeData()
  flattenTreeData()
})
</script>
