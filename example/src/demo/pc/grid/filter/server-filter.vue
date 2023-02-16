<template>
  <tiny-grid :fetch-data="fetchData" @filter-change="filterChangeEvent" remote-filter :pager="pager">
    <tiny-grid-column type="index" width="60"></tiny-grid-column>
    <tiny-grid-column type="selection" width="60"></tiny-grid-column>
    <tiny-grid-column field="name" title="公司名称" sortable></tiny-grid-column>
    <tiny-grid-column field="employees" title="员工数" sortable></tiny-grid-column>
    <tiny-grid-column field="created_date" title="创建日期" sortable></tiny-grid-column>
    <tiny-grid-column field="city" title="城市" :filter="cityFilter" sortable></tiny-grid-column>
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
          pageSize: 5,
          total: 0,
          pageSizes: [5, 10, 15, 20],
          layout: 'sizes, total, prev, pager, next, jumper'
        }
      },
      cityFilter: {
        multi: true,
        enumable: true,
        defaultFilter: false,
        inputFilter: false
      },
      fetchData: {
        filter: true,
        api: this.getData
      },
      tableData: [
        {
          id: '1',
          name: 'GFD科技公司',
          city: '福州',
          employees: 800,
          created_date: '2014-04-30 00:56:00'
        },
        {
          id: '2',
          name: 'WWW科技公司',
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
          name: 'TGB科技公司',
          city: '龙岩',
          employees: 360,
          created_date: '2013-01-13 13:13:13'
        },
        {
          id: '5',
          name: 'YHN科技公司',
          city: '韶关',
          employees: 810,
          created_date: '2012-12-12 12:12:12'
        },
        {
          id: '6',
          name: 'WSX科技公司',
          city: '黄冈',
          employees: 800,
          created_date: '2011-11-11 11:11:11'
        },
        {
          id: '7',
          name: 'KBG物业公司',
          city: '赤壁',
          employees: 400,
          created_date: '2016-04-30 23:56:00'
        },
        {
          id: '8',
          name: 'SZ市福德宝网络技术公司',
          city: '深圳',
          employees: 540,
          created_date: '2016-06-03 13:53:25'
        }
      ]
    }
  },
  methods: {
    filterChangeEvent({ filters }) {
      Modal.message({
        message: `筛选条件 change 事件：${JSON.stringify(filters)}`,
        status: 'info'
      })
    },
    getData({ page, sort, data, filters }) {
      return new Promise((resolve) => {
        // 此处服务为 自定义服务, page, sort, data, filters可获取当前表格的分页、排序、过滤等信息发送至服务端
        // mock remote server
        const startIndex = (page.currentPage - 1) * page.pageSize
        const allData = this.tableData.filter((item) => !filters.city || !filters.city.value.length || filters.city.value.indexOf(item.city) !== -1)
        const data = {
          result: allData.slice(startIndex, startIndex + page.pageSize),
          page: { ...page, total: allData.length }
        }

        resolve({ result: data.result, page: data.page })
      })
    }
  }
}
</script>
