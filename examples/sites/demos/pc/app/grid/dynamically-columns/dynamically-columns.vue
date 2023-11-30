<template>
  <div>
    <tiny-date-picker
      v-model="value"
      type="monthrange"
      value-format="yyyy-MM"
      @change="handleChange"
    ></tiny-date-picker>
    <tiny-grid
      ref="grid"
      :fetch-data="fetchData"
      :pager="pagerConfig"
      resizable
      :edit-config="{ trigger: 'click', mode: 'cell', showStatus: true }"
    >
      <tiny-grid-column title="Group" field="group" header-align="center"> </tiny-grid-column>
      <tiny-grid-column v-for="(item, index) in item" :key="index" :title="item.title" header-align="center">
        <tiny-grid-column
          v-for="(item1, i) in item.content"
          :key="i"
          :field="item1.field"
          :title="item1.title"
        ></tiny-grid-column>
      </tiny-grid-column>
    </tiny-grid>
  </div>
</template>

<script lang="jsx">
import { Grid, GridColumn, DatePicker, Pager } from '@opentiny/vue'

export default {
  components: {
    TinyGrid: Grid,
    TinyGridColumn: GridColumn,
    TinyDatePicker: DatePicker
  },
  data() {
    return {
      pagerConfig: {
        component: Pager,
        attrs: {
          currentPage: 1,
          pageSize: 5,
          pageSizes: [5, 10],
          total: 0,
          layout: 'total, prev, pager, next, jumper, sizes'
        }
      },
      value: [new Date(2020, 1), new Date()],
      item: [],
      tableData: [
        {
          id: '1',
          group: 'group0',
          W11: '100',
          W21: '100',
          W31: '100',
          W41: '100',
          W12: '200',
          W22: '150',
          W32: '110',
          W42: '110',
          W13: '200',
          W23: '150',
          W33: '110',
          W43: '110'
        },
        {
          id: '2',
          group: 'group1',
          W11: '100',
          W21: '100',
          W31: '100',
          W41: '100',
          W12: '200',
          W22: '150',
          W32: '110',
          W42: '110',
          W13: '200',
          W23: '150',
          W33: '110',
          W43: '110'
        },
        {
          id: '3',
          group: 'group2',
          W11: '100',
          W21: '100',
          W31: '100',
          W41: '100',
          W12: '200',
          W22: '150',
          W32: '110',
          W42: '110',
          W13: '200',
          W23: '150',
          W33: '110',
          W43: '110'
        },
        {
          id: '4',
          group: 'group3',
          W11: '100',
          W21: '100',
          W31: '100',
          W41: '100',
          W12: '200',
          W22: '150',
          W32: '110',
          W42: '110',
          W13: '200',
          W23: '150',
          W33: '110',
          W43: '110'
        },
        {
          id: '5',
          group: 'group4',
          W11: '100',
          W21: '100',
          W31: '100',
          W41: '100',
          W12: '200',
          W22: '150',
          W32: '110',
          W42: '110',
          W13: '200',
          W23: '150',
          W33: '110',
          W43: '110'
        },
        {
          id: '6',
          group: 'group5',
          W11: '100',
          W21: '100',
          W31: '100',
          W41: '100',
          W12: '200',
          W22: '150',
          W32: '110',
          W42: '110',
          W13: '200',
          W23: '150',
          W33: '110',
          W43: '110'
        }
      ],
      fetchData: {
        api: this.getData
      }
    }
  },
  mounted() {
    const end = new Date()
    const year = end.getFullYear()
    const month = end.getMonth() + 1
    let initmonth = this.getMonthBetween('2020-02', year + '-' + month)

    this.forWeek(initmonth)
  },
  methods: {
    getData({ page, filterArgs }) {
      let curPage = page.currentPage
      let pageSize = page.pageSize
      let offset = (curPage - 1) * pageSize

      return new Promise((resolve) => {
        setTimeout(() => {
          let result = this.tableData.slice(0)
          let total = this.tableData.length

          if (filterArgs) {
            result = result.filter((item) => item.area === filterArgs)
            total = result.length
          }

          result = result.slice(offset, offset + pageSize)

          resolve({ result, page: { total } })
        }, 500)
      })
    },
    forWeek(week) {
      week.forEach((i) => {
        this.item.push({
          title: `${i}`,
          content: [
            { field: `W1${i}`, title: 'W1' },
            { field: `W2${i}`, title: 'W2' },
            { field: `W3${i}`, title: 'W3' },
            { field: `W4${i}`, title: 'W4' }
          ]
        })
      })
    },
    handleChange(val) {
      if (val && val.length > 1) {
        this.item = []
        let monthLen = this.getMonthBetween(val[0], val[1])

        this.forWeek(monthLen)

        this.$refs.grid.handleFetch()
      }
    },
    getMonthBetween(start, end) {
      // 传入的格式YYYY-MM
      let result = []
      let s = start.split('-')
      let e = end.split('-')
      let min = new Date()
      let max = new Date()
      min.setFullYear(s[0], s[1] * 1 - 1, 1) // 开始日期
      max.setFullYear(e[0], e[1] * 1 - 1, 1) // 结束日期
      let curr = min

      while (curr <= max) {
        let month = curr.getMonth()
        result.push(month + 1)
        curr.setMonth(month + 1)
      }
      return result
    }
  }
}
</script>
