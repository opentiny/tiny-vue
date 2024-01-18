<template>
  <div>
    <div>
      <tiny-button @click="scrollTo">滚动到对应的位置</tiny-button>
      <tiny-button @click="scrollToRow">滚动到第50行</tiny-button>
      <tiny-button @click="scrollToColumn">滚动到500列</tiny-button>
    </div>
    <br />
    <tiny-grid ref="tinyGridRef" height="300"> </tiny-grid>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Grid as TinyGrid, Button as TinyButton } from '@opentiny/vue'

const tinyGridRef = ref()

mockData()

// 生成 1000 条模拟数据
function mockData() {
  setTimeout(() => {
    let columns = []
    let datas = []
    for (let i = 0; i < 1000; i++) {
      let col = { field: 'attr' + i, title: 'col' + i }
      columns.push(col)
    }

    for (let j = 0; j < 100; j++) {
      let data = {}

      for (let k = 0; k < 1000; k++) {
        data['attr' + k] = `row${j}`
      }

      datas.push(data)
    }

    tinyGridRef.value.reloadColumn(columns)
    tinyGridRef.value.reloadData(datas)
  }, 200)
}

function scrollTo() {
  tinyGridRef.value.scrollTo(800, 300)
}

function scrollToRow() {
  let row = tinyGridRef.value.getData(49)

  tinyGridRef.value.scrollToRow(row)
}

function scrollToColumn() {
  let column = tinyGridRef.value.getColumnByField('attr499')

  tinyGridRef.value.scrollToColumn(column)
}
</script>
