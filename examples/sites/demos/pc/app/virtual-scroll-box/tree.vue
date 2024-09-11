<template>
  <tiny-virtual-scroll-box ref="vsBox" v-bind="config" @change="onVsChange">
    <template v-if="renderRows.length > 0">
      <tiny-tree
        ref="tree"
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

<script>
import { VirtualScrollBox, Tree } from '@opentiny/vue'
import { hooks } from '@opentiny/vue-common'

export default {
  components: {
    TinyVirtualScrollBox: VirtualScrollBox,
    TinyTree: Tree
  },
  data() {
    return {
      config: {
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
        // scrollbarSize: 17
      },
      treeData: [],
      treeExpandeds: [1, 21], // 树默认展开项的id
      rowOffset: '',
      nodeKey: 'id',
      rowHeight: 36
    }
  },
  setup() {
    const renderRows = hooks.ref([])

    hooks.provide('TreeAdapter', { shouldRender: (node) => renderRows.value.includes(node.data) })

    return { renderRows }
  },
  created() {
    this.genTreeData()
    this.flattenTreeData()
  },
  methods: {
    onExpandChange() {
      const vsBoxVm = this.$refs.vsBox
      const treeVm = this.$refs.tree

      this.$nextTick(() => {
        const treeExpandeds = []

        const traverse = (childNodes) => {
          if (Array.isArray(childNodes) && childNodes.length > 0) {
            childNodes.forEach((node) => {
              if (node.expanded) {
                treeExpandeds.push(node.data[this.nodeKey])
                traverse(node.childNodes)
              }
            })
          }
        }

        traverse(treeVm.state.root.childNodes)

        this.treeExpandeds = treeExpandeds
        this.flattenTreeData()

        this.$nextTick(() => {
          vsBoxVm.refresh()
        })
      })
    },
    onVsChange({ viewRows }) {
      const renderRows = []
      viewRows.forEach((viewRow) => {
        viewRow.info.raw.forEach((treeRow) => {
          if (!renderRows.includes(treeRow)) {
            renderRows.push(treeRow)
          }
        })
      })

      this.renderRows = renderRows

      const firstViewRow = viewRows[0]
      const translateYValue = firstViewRow.info.offset - (firstViewRow.info.raw.length - 1) * this.rowHeight

      this.rowOffset = `translateY(${translateYValue}px)`
    },
    flattenTreeData() {
      const { treeData, treeExpandeds } = this
      const chart = []
      const stack = []

      const flatChart = (treeData) => {
        if (Array.isArray(treeData) && treeData.length > 0) {
          treeData.forEach((item) => {
            chart.push([...stack, item])

            if (treeExpandeds.includes(item[this.nodeKey])) {
              stack.push(item)
              flatChart(item.children)
              stack.pop(item)
            }
          })
        }
      }

      // 平铺树形数据
      flatChart(treeData)

      this.config.rows = chart
      this.config.rowSizes = chart.map(() => this.rowHeight) // 树的每一项高度

      // 这两项没有实际作用，只是为了保证组件正常工作
      this.config.columns = ['c-1'] // 只有1列
      this.config.columnSizes = [this.config.width - 17] // 这个列的宽度为 `虚滚区域宽度` 减去 `垂直滚动条宽度`
    },
    genTreeData() {
      const treeData = []

      let id = 0

      const genItem = (total, level, array) => {
        for (let i = 0; i < total; i++) {
          const itemId = ++id

          array.push({
            [this.nodeKey]: itemId,
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
      genItem(500, 20, treeData)

      this.treeData = treeData
    }
  }
}
</script>
