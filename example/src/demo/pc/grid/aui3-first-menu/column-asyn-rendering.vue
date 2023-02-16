<template>
  <tiny-grid :fetch-data="fetchData" is-async-column :pager="pagerConfig">
    <tiny-grid-column type="index" width="60"></tiny-grid-column>
    <tiny-grid-column field="name" title="名称"></tiny-grid-column>
    <tiny-grid-column field="city" title="所在城市" :format-config="{ async: { fetch: fetchMethod } }"></tiny-grid-column>
    <tiny-grid-column field="employees" title="员工数量"></tiny-grid-column>
    <tiny-grid-column field="created_date" title="成立时间"></tiny-grid-column>
    <tiny-grid-column field="introduction" title="公司简介" show-overflow></tiny-grid-column>
  </tiny-grid>
</template>

<script>
import { Grid, GridColumn, Pager } from '@opentiny/vue'

export default {
  components: {
    TinyGrid: Grid,
    TinyGridColumn: GridColumn
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
          layout: 'sizes, total, prev, pager, next, jumper'
        }
      },
      fetchData: {
        api: this.getData
      },
      tableData: [
        {
          id: '1',
          name: 'GFD科技公司',
          city: 'FZ',
          employees: 800,
          created_date: '2014-04-30 00:56:00',
          introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
        },
        {
          id: '2',
          name: 'WWW科技公司',
          city: 'SZ',
          employees: 300,
          created_date: '2016-07-08 12:36:22',
          introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
        },
        {
          id: '3',
          name: 'RFV有限责任公司',
          city: 'ZS',
          employees: 1300,
          created_date: '2014-02-14 14:14:14',
          introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
        },
        {
          id: '4',
          name: 'TGB科技公司',
          city: 'LY',
          employees: 360,
          created_date: '2013-01-13 13:13:13',
          introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
        },
        {
          id: '5',
          name: 'YHN科技公司',
          city: 'SG',
          employees: 810,
          created_date: '2012-12-12 12:12:12',
          introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
        },
        {
          id: '6',
          name: 'WSX科技公司',
          city: 'HG',
          employees: 800,
          created_date: '2011-11-11 11:11:11',
          introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
        },
        {
          id: '7',
          name: 'KBG物业公司',
          city: 'CB',
          employees: 400,
          created_date: '2016-04-30 23:56:00',
          introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
        },
        {
          id: '8',
          name: 'SZ市福德宝网络技术公司',
          city: 'XM',
          created_date: '2016-06-03 13:53:25',
          employees: 540,
          introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
        }
      ]
    }
  },
  methods: {
    getData({ page }) {
      let curPage = page.currentPage
      let pageSize = page.pageSize
      let offset = (curPage - 1) * pageSize

      return new Promise((resolve) => {
        resolve({
          result: this.tableData.slice(offset, offset + pageSize),
          page: { total: this.tableData.length }
        })
      })
    },
    fetchMethod() {
      const randomFN = () => [
        {
          label: '福州',
          value: 'FZ'
        },
        {
          label: '龙岩',
          value: 'LY'
        },
        {
          label: '深圳',
          value: 'SZ'
        },
        {
          label: '赤壁',
          value: 'CB'
        },
        {
          label: '中山',
          value: 'ZS'
        },
        {
          label: '韶关',
          value: 'SG'
        },
        {
          label: '黄冈',
          value: 'HG'
        },
        {
          label: '厦门',
          value: 'XM'
        }
      ]

      return new Promise((resolve) => {
        // 模拟发起请求，500毫秒后生效
        setTimeout(() => {
          resolve(randomFN())
          // 模拟请求完成
        }, 500)
      })
    }
  }
}
</script>
