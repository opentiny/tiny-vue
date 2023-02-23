<template>
  <div>
    <tiny-grid ref="basicGrid" seq-serial :edit-config="{ trigger: 'click', mode: 'cell', showStatus: true }" :data="tableData">
      <tiny-grid-column type="index" width="60"></tiny-grid-column>
      <tiny-grid-column type="selection" width="50"></tiny-grid-column>
      <tiny-grid-column field="name" show-overflow title="名称" :editor="{ component: 'input', autoselect: true }"></tiny-grid-column>
      <tiny-grid-column field="area" title="区域" :editor="{ component: 'input' }"></tiny-grid-column>
      <tiny-grid-column field="address" title="地址" :editor="{ component: 'input' }"></tiny-grid-column>
      <tiny-grid-column field="introduction" title="公司简介" :editor="{ component: 'input', autoselect: true }" show-overflow></tiny-grid-column>
    </tiny-grid>
    <tiny-pager
      :current-page="custPager.currentPage"
      :page-size="custPager.pageSize"
      :total="custPager.total"
      :page-sizes="[5, 10, 20, 50]"
      @current-change="currentChange"
      @size-change="sizeChange"
      layout="total, prev, pager, next, jumper, sizes"
    ></tiny-pager>
  </div>
</template>

<script>
import { Grid, GridColumn, Pager } from '@opentiny/vue'

export default {
  components: {
    TinyGrid: Grid,
    TinyGridColumn: GridColumn,
    TinyPager: Pager
  },
  data() {
    return {
      custPager: {
        currentPage: 1,
        pageSize: 5,
        total: 0
      },
      tableData: [],
      mockData: Array.from({ length: 20 }, (a, i) => ({
        id: i + 1,
        name: 'GFD科技YX公司' + i,
        userId: 421000103624183,
        area: '华东区',
        province: '福建省',
        city: '福州',
        contact: '许生',
        telephone: '1234567890',
        address: '福州',
        introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。',
        employees: 800,
        created_date: '2014-04-30 00:56:00',
        boole: false,
        assets: '1000000',
        rate: 0.9
      }))
    }
  },
  methods: {
    currentChange(current) {
      this.custPager.currentPage = current
      this.fetchData()
    },
    sizeChange(size) {
      this.custPager.pageSize = size
      this.fetchData()
    },
    fetchData() {
      this.getData({ page: this.custPager }).then(({ result, page }) => {
        this.tableData = result
        this.custPager.total = page.totalRows
      })
    },
    getData({ page }) {
      return new Promise((resolve) => {
        // 此处为用户自定义的服务端分页，排序，过滤服务

        setTimeout(() => {
          const startIndex = (page.currentPage - 1) * page.pageSize
          const allData = this.mockData
          const data = {
            result: allData.slice(startIndex, startIndex + page.pageSize),
            page: Object.assign({}, page, { totalRows: allData.length })
          }

          resolve({ result: data.result, page: data.page })
        }, 500)
      })
    }
  },
  created() {
    this.fetchData()
  }
}
</script>
