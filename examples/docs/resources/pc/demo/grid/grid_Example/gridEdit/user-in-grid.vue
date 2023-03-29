<template>
  <tiny-grid :fetch-data="fetchData" :pager="pagerConfig">
    <tiny-grid-column type="index" width="60"></tiny-grid-column>
    <tiny-grid-column field="name" title="名称"></tiny-grid-column>
    <tiny-grid-column
      field="user"
      width="500"
      :editor="{
        component: User,
        type: 'visible',
        attrs: { multiple: true, fetchW3Accounts }
      }"
    ></tiny-grid-column>
    <tiny-grid-column field="introduction" title="公司简介" show-overflow></tiny-grid-column>
  </tiny-grid>
</template>

<script lang="jsx">
import { Grid, GridColumn, Pager, User } from '@opentiny/vue'

export default {
  components: {
    TinyGrid: Grid,
    TinyGridColumn: GridColumn
  },
  data() {
    return {
      User,
      userData: [], // 該数组用来临时存放每一页的用户数据
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
      fetchData: {
        api: this.getData
      },
      tableData: [
        {
          id: '1',
          name: 'GFD科技有限公司',
          user: '421000103624183,435259704104388', // 该行数据为多用户
          employees: 800,
          createdDate: '2014-04-30 00:56:00',
          introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
        },
        {
          id: '2',
          name: 'WWW科技有限公司',
          user: '435259704104388',
          employees: 300,
          createdDate: '2016-07-08 12:36:22',
          introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
        },
        {
          id: '3',
          name: 'RFV有限责任公司',
          user: '441047913162396',
          employees: 1300,
          createdDate: '2014-02-14 14:14:14',
          introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
        },
        {
          id: '4',
          name: 'TGB科技有限公司',
          user: '702973890055088',
          employees: 360,
          createdDate: '2013-01-13 13:13:13',
          introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
        },
        {
          id: '5',
          name: 'YHN科技有限公司',
          user: '702973890055088',
          employees: 810,
          createdDate: '2012-12-12 12:12:12',
          introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
        },
        {
          id: '6',
          name: 'WSX科技有限公司',
          user: '702973890055088',
          employees: 800,
          createdDate: '2011-11-11 11:11:11',
          introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
        },
        {
          id: '7',
          name: 'KBG物业有限公司',
          user: '435259704104388',
          employees: 400,
          createdDate: '2016-04-30 23:56:00',
          introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
        },
        {
          id: '8',
          name: '深圳市福德宝网络技术有限公司',
          user: '421000103624183',
          createdDate: '2016-06-03 13:53:25',
          employees: 540,
          introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
        }
      ]
    }
  },
  methods: {
    getData({ page }) {
      const curPage = page.currentPage
      const pageSize = page.pageSize
      const offset = (curPage - 1) * pageSize

      return new Promise((resolve) => {
        const datas = this.tableData.slice(offset, offset + pageSize) // 根据静态数据 tableData 模拟表格分页

        // 在表格返回数据之前，请求当前页的所有用户信息，存放到临时的用户数据 userData 中
        this.$service.fetchW3Accounts(datas.map((item) => item.user).join(',')).then((data) => {
          this.userData = data
          resolve({ result: datas, page: { total: this.tableData.length } })
        })
      })
    },
    // 以下方法是设置用户组件自定义服务的请求方法
    fetchW3Accounts(value) {
      // 从临时存放的用户数据里根据单元格的值 value 过滤出匹配的用户信息, 如果 value 是多个用户时，值要以逗号间隔，并且在列上需要配置 User 组件 multiple 为 true
      return Promise.resolve(this.userData.filter((item) => value.split(',').includes(item.userId.toString())))
    }
  }
}
</script>
