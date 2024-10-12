<template>
  <tiny-virtual-scroll-box v-bind="config">
    <template #default="{ params: { viewRows, viewCols, isScrollX, isScrollY, isTop, isBottom, isLeft, isRight } }">
      <div
        v-for="viewRow in viewRows"
        :key="viewRow.key"
        :style="viewRow.style"
        :class="rowClass({ viewRow, isScrollY, isTop, isBottom })"
      >
        <div
          v-for="viewCol in viewCols"
          :key="viewCol.key"
          :style="colStyle({ viewRow, viewCol })"
          :class="colClass({ viewCol, isScrollX, isLeft, isRight })"
        >
          <div class="vs-grid-cell">
            {{ viewRow.info.raw + ',' + viewCol.info.raw }}
          </div>
        </div>
      </div>
    </template>
  </tiny-virtual-scroll-box>
</template>

<script setup>
import { reactive } from 'vue'
import { VirtualScrollBox as TinyVirtualScrollBox } from '@opentiny/vue'

const genColumn = (total) => {
  const columns = []
  const columnSizes = []

  for (let i = 1; i <= total; i++) {
    columns.push(`c-${i}`)
    // 列宽在 120 到 180
    columnSizes.push(Math.round(120 + Math.random() * 60))
  }

  return { columns, columnSizes }
}

const genRow = (total) => {
  const rows = []
  const rowSizes = []

  for (let i = 1; i <= total; i++) {
    rows.push(`r-${i}`)
    // 行高在 24 到 36
    rowSizes.push(Math.round(24 + Math.random() * 12))
  }

  return { rows, rowSizes }
}

// 生成 10000 列
const { columns, columnSizes } = genColumn(10000)
// 生成 20000 行
const { rows, rowSizes } = genRow(20000)

const config = reactive({
  width: 900,
  height: 400,
  rowBuffer: 120,
  columnBuffer: 240,
  columns,
  columnSizes,
  rows,
  rowSizes,
  fixedColumns: [[0], [1]],
  fixedRows: [[0], [1]],
  spanConfig: [[3, 3, 2, 2]]
})

const rowClass = ({ viewRow, isScrollY, isTop, isBottom }) => {
  return {
    [viewRow.key]: true,
    'vs-row': true,
    'vs-fixed-top-last': viewRow.info.startLast && !isTop && isScrollY,
    'vs-fixed-bottom-first': viewRow.info.endFirst && !isBottom && isScrollY,
    'vs-is-last-row': viewRow.info.isLast
  }
}
const colClass = ({ viewCol, isScrollX, isLeft, isRight }) => {
  return {
    [viewCol.key]: true,
    'vs-cell': true,
    'vs-fixed-left-last': viewCol.info.startLast && !isLeft && isScrollX,
    'vs-fixed-right-first': viewCol.info.endFirst && !isRight && isScrollX,
    'vs-is-last-col': viewCol.info.isLast
  }
}
const colStyle = ({ viewRow, viewCol }) => {
  return { height: viewRow.style.height, ...viewCol.style }
}
</script>

<style scoped>
.vs-cell {
  display: table-cell;
  font-size: 12px;
  background-color: white;
  background-image: linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0 100%),
    linear-gradient(180deg, rgba(0, 0, 0, 0.2) 1px 100%);
  background-position:
    0 0,
    0 1px;
  background-size:
    100% 1px,
    1px 100%;
  background-repeat: no-repeat;
}

.vs-is-last-row > .vs-cell {
  background-image: linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0 100%),
    linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0 100%), linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0 100%);
  background-position:
    0 0,
    0 1px,
    0 100%;
  background-size:
    100% 1px,
    1px 100%,
    100% 1px;
  background-repeat: no-repeat;
}

.vs-is-last-col.vs-cell {
  background-image: linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0 100%),
    linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0 100%), linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0 100%);
  background-position:
    0 0,
    0 1px,
    100% 0;
  background-size:
    100% 1px,
    1px 100%,
    1px 100%;
  background-repeat: no-repeat;
}

.vs-is-last-row > .vs-is-last-col.vs-cell {
  background-image: linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0 100%),
    linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0 100%), linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0 100%),
    linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0 100%);
  background-position:
    0 0,
    0 1px,
    0 100%,
    100% 0;
  background-size:
    100% 1px,
    1px 100%,
    100% 1px,
    1px 100%;
  background-repeat: no-repeat;
}

.vs-grid-cell {
  width: 100%;
  height: 100%;
  padding: 4px 2px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  contain: strict;
}

.vs-fixed-top-last::after {
  content: '';
  background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.2), transparent);
  width: 100%;
  height: 6px;
  position: absolute;
  left: 0;
  bottom: -6px;
  pointer-events: none;
}

.vs-fixed-bottom-first::after {
  content: '';
  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.2), transparent);
  width: 100%;
  height: 6px;
  position: absolute;
  left: 0;
  top: -6px;
  pointer-events: none;
}

.vs-fixed-left-last::after {
  content: '';
  background-image: linear-gradient(90deg, rgba(0, 0, 0, 0.2), transparent);
  width: 6px;
  height: 100%;
  position: absolute;
  top: 0;
  right: -6px;
  pointer-events: none;
}

.vs-fixed-right-first::after {
  content: '';
  background-image: linear-gradient(-90deg, rgba(0, 0, 0, 0.2), transparent);
  width: 6px;
  height: 100%;
  position: absolute;
  top: 0;
  left: -6px;
  pointer-events: none;
}
</style>
