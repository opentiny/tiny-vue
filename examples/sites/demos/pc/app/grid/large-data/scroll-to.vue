<template>
  <div>
    <div>
      <tiny-button @click="scrollTo">滚动到对应的位置</tiny-button>
      <tiny-button @click="scrollToRow">滚动到第50行</tiny-button>
      <tiny-button @click="scrollToColumn">滚动到500列</tiny-button>
    </div>
    <br />
    <tiny-grid ref="tinyGrid" height="300"> </tiny-grid>
  </div>
</template>

<script lang="jsx">
import { Grid, Button } from '@opentiny/vue'

export default {
  components: {
    TinyGrid: Grid,
    TinyButton: Button
  },
  data() {
    return {}
  },
  created() {
    this.mockData()
  },
  methods: {
    // 生成 1000 条模拟数据
    mockData() {
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

        this.$refs.tinyGrid.reloadColumn(columns)
        this.$refs.tinyGrid.reloadData(datas)
      }, 200)
    },
    scrollTo() {
      this.$refs.tinyGrid.scrollTo(800, 300)
    },
    scrollToRow() {
      let row = this.$refs.tinyGrid.getData(49)

      this.$refs.tinyGrid.scrollToRow(row)
    },
    scrollToColumn() {
      let column = this.$refs.tinyGrid.getColumnByField('attr499')

      this.$refs.tinyGrid.scrollToColumn(column)
    }
  }
}
</script>
