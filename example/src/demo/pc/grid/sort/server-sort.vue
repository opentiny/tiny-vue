<template>
  <tiny-grid :fetch-data="fetchData" @sort-change="sortChangeEvent" :pager="pager" remote-sort>
    <tiny-grid-column type="index" width="60"></tiny-grid-column>
    <tiny-grid-column type="selection" width="60"></tiny-grid-column>
    <tiny-grid-column field="name" title="公司名称" sortable></tiny-grid-column>
    <tiny-grid-column field="employees" title="员工数" sortable></tiny-grid-column>
    <tiny-grid-column field="created_date" title="创建日期" sortable></tiny-grid-column>
    <tiny-grid-column field="city" title="城市" sortable></tiny-grid-column>
  </tiny-grid>
</template>

<script>
import { Grid, GridColumn, Pager, Modal } from '@opentiny/vue'

export default {
  components: {
    TinyGrid: Grid,
    TinyGridColumn: GridColumn
  },
  data() {
    return {
      pager: {
        component: Pager,
        attrs: {
          currentPage: 1,
          pageSize: 15,
          total: 0,
          pageSizes: [5, 10, 15, 20],
          layout: 'total, prev, pager, next, jumper, sizes'
        }
      },
      fetchData: {
        sort: true,
        api: this.getData
      },
      tableData: [
        {
          id: '1',
          name: 'GFD科技YX公司',
          city: '福州',
          employees: 800,
          created_date: '2014-04-30 00:56:00'
        },
        {
          id: '2',
          name: 'WWW科技YX公司',
          city: '深圳',
          employees: 300,
          created_date: '2016-07-08 12:36:22'
        },
        {
          id: '3',
          name: 'RFV有限责任公司',
          city: '中山',
          employees: 1300,
          created_date: '2014-02-14 14:14:14'
        },
        {
          id: '4',
          name: 'TGB科技YX公司',
          city: '龙岩',
          employees: 360,
          created_date: '2013-01-13 13:13:13'
        },
        {
          id: '5',
          name: 'YHN科技YX公司',
          city: '韶关',
          employees: 810,
          created_date: '2012-12-12 12:12:12'
        },
        {
          id: '6',
          name: 'WSX科技YX公司',
          city: '黄冈',
          employees: 800,
          created_date: '2011-11-11 11:11:11'
        },
        {
          id: '7',
          name: 'KBG物业YX公司',
          city: '赤壁',
          employees: 400,
          created_date: '2016-04-30 23:56:00'
        },
        {
          id: '8',
          name: '深圳市福德宝网络技术YX公司',
          city: '深圳',
          employees: 540,
          created_date: '2016-06-03 13:53:25'
        }
      ]
    }
  },
  methods: {
    sortChangeEvent({ order }) {
      Modal.message({ message: `${order}`, status: 'info' })
    },
    getData({ page, sort, data, filters }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          // 此处为用户自定义的服务端分页、排序、过滤服务
          const startIndex = (page.currentPage - 1) * page.pageSize
          const allData = this.tableData.filter((item) => !filters.city || !filters.city.value.length || filters.city.value.indexOf(item.city) !== -1)
          const data = {
            result: allData.slice(startIndex, startIndex + page.pageSize),
            page: Object.assign({}, page, { total: allData.length })
          }

          resolve({ result: data.result, page: data.page })
        }, 500)
      })
    }
  }
}
</script>
