<template>
  <div>
    <tiny-button @click="loadData" style="max-width: 200px; margin-bottom: 20px"
      >空表格，请点击生成 1000 列</tiny-button
    >
    <tiny-grid ref="tinyGridRef" height="300"></tiny-grid>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Button as TinyButton, Grid as TinyGrid } from '@opentiny/vue'

const columns = []
const tableData = []

for (let i = 0; i < 1000; i++) {
  columns.push({ width: 300, field: 'attr' + (i + 1), title: 'col' + (i + 1) })
}

for (let k = 0; k < 100; k++) {
  const row = {}
  for (let c = 1; c <= 1000; c++) {
    row[`attr${c}`] = `row${k}_col${c}`
  }
  tableData.push(row)
}
const tinyGridRef = ref()

function loadData() {
  tinyGridRef.value.loadColumn(columns)
  tinyGridRef.value.loadData(tableData)
}
</script>
