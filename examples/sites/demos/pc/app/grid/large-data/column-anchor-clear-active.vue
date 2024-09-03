<template>
  <tiny-grid
    column-min-width="100"
    auto-resize
    :column-anchor="columnAnchor"
    :optimization="{ scrollX: { gt: 20 } }"
    :fetch-data="fetchData"
    :pager="pagerConfig"
  >
    <tiny-grid-column field="name0" title="名称0" sortable fixed="left"></tiny-grid-column>
    <tiny-grid-column field="name1" title="名称1" sortable fixed="left"></tiny-grid-column>
    <tiny-grid-column field="name2" title="名称2" sortable fixed="left"></tiny-grid-column>
    <tiny-grid-column field="name3" title="名称3" sortable></tiny-grid-column>
    <tiny-grid-column field="name4" title="名称4" sortable></tiny-grid-column>
    <tiny-grid-column field="name5" title="名称5" sortable></tiny-grid-column>
    <tiny-grid-column field="name6" title="名称6" sortable></tiny-grid-column>
    <tiny-grid-column field="name7" title="名称7" sortable></tiny-grid-column>
    <tiny-grid-column field="name8" title="名称8" sortable></tiny-grid-column>
    <tiny-grid-column field="name9" title="名称9" sortable></tiny-grid-column>
    <tiny-grid-column field="name10" title="名称10" sortable></tiny-grid-column>
    <tiny-grid-column field="name" title="名称" sortable></tiny-grid-column>
    <tiny-grid-column field="name11" title="名称11" sortable></tiny-grid-column>
    <tiny-grid-column field="name12" title="名称12" sortable></tiny-grid-column>
    <tiny-grid-column field="name13" title="名称13" sortable></tiny-grid-column>
    <tiny-grid-column field="name14" title="名称14" sortable></tiny-grid-column>
    <tiny-grid-column field="name15" title="名称15" sortable></tiny-grid-column>
    <tiny-grid-column field="name16" title="名称16" sortable></tiny-grid-column>
    <tiny-grid-column field="name17" title="名称17" sortable></tiny-grid-column>
    <tiny-grid-column field="name18" title="名称18" sortable></tiny-grid-column>
    <tiny-grid-column field="name19" title="名称19" sortable></tiny-grid-column>
    <tiny-grid-column field="name20" title="名称20" sortable></tiny-grid-column>
    <tiny-grid-column field="employees" title="员工数" sortable></tiny-grid-column>
    <tiny-grid-column field="name21" title="名称21" sortable></tiny-grid-column>
    <tiny-grid-column field="name22" title="名称22" sortable></tiny-grid-column>
    <tiny-grid-column field="name23" title="名称23" sortable></tiny-grid-column>
    <tiny-grid-column field="name24" title="名称24" sortable></tiny-grid-column>
    <tiny-grid-column field="name25" title="名称25" sortable></tiny-grid-column>
    <tiny-grid-column field="name26" title="名称26" sortable></tiny-grid-column>
    <tiny-grid-column field="name27" title="名称27" sortable></tiny-grid-column>
    <tiny-grid-column field="name28" title="名称28" sortable></tiny-grid-column>
    <tiny-grid-column field="name29" title="名称29" sortable></tiny-grid-column>
    <tiny-grid-column field="name30" title="名称30" sortable></tiny-grid-column>
    <tiny-grid-column field="address" title="地址"></tiny-grid-column>
    <tiny-grid-column field="name31" title="名称31" sortable></tiny-grid-column>
    <tiny-grid-column field="name32" title="名称32" sortable></tiny-grid-column>
    <tiny-grid-column field="name33" title="名称33" sortable></tiny-grid-column>
    <tiny-grid-column field="name34" title="名称34" sortable></tiny-grid-column>
    <tiny-grid-column field="name35" title="名称35" sortable></tiny-grid-column>
    <tiny-grid-column field="name36" title="名称36" sortable></tiny-grid-column>
    <tiny-grid-column field="name37" title="名称37" sortable></tiny-grid-column>
    <tiny-grid-column field="name38" title="名称38" sortable></tiny-grid-column>
    <tiny-grid-column field="name39" title="名称39" sortable></tiny-grid-column>
    <tiny-grid-column field="name40" title="名称40" sortable></tiny-grid-column>
    <tiny-grid-column field="name41" title="名称41" sortable></tiny-grid-column>
    <tiny-grid-column field="name42" title="名称42" sortable></tiny-grid-column>
    <tiny-grid-column field="name43" title="名称43" sortable></tiny-grid-column>
    <tiny-grid-column field="name44" title="名称44" sortable></tiny-grid-column>
    <tiny-grid-column field="name45" title="名称45" sortable></tiny-grid-column>
    <tiny-grid-column field="name46" title="名称46" sortable></tiny-grid-column>
    <tiny-grid-column field="name47" title="名称47" sortable></tiny-grid-column>
    <tiny-grid-column field="introduction" title="公司简介" show-overflow></tiny-grid-column>
    <tiny-grid-column field="name48" title="名称48" sortable fixed="right"></tiny-grid-column>
    <tiny-grid-column field="name49" title="名称49" sortable fixed="right"></tiny-grid-column>
  </tiny-grid>
</template>

<script>
import { Grid, GridColumn, Pager } from '@opentiny/vue'
import { IconMarkOn } from '@opentiny/vue-icon'

const tableData = [
  {
    id: '1',
    name: 'GFD科技有限公司',
    address: '福州',
    introduction: '公司技术和研发实力雄厚',
    employees: 800,
    name0: '1-name-0',
    name1: '1-name-1',
    name2: '1-name-2'
  },
  {
    id: '2',
    name: 'WWW科技有限公司',
    address: '深圳福田区',
    introduction: '公司技术和研发实力雄厚',
    employees: 300,
    name0: '2-name-0',
    name1: '2-name-1',
    name2: '2-name-2'
  },
  {
    id: '3',
    name: 'RFV有限责任公司',
    address: '中山市',
    introduction: '公司技术和研发实力雄厚',
    employees: 1300,
    name0: '3-name-0',
    name1: '3-name-1',
    name2: '3-name-2'
  },
  {
    id: '4',
    name: 'JKL科技有限公司',
    address: '福州',
    introduction: '公司技术和研发实力雄厚',
    employees: 1200,
    name0: '4-name-0',
    name1: '4-name-1',
    name2: '4-name-2'
  },
  {
    id: '5',
    name: 'TGB科技有限公司',
    address: '深圳福田区',
    introduction: '公司技术和研发实力雄厚',
    employees: 1400,
    name0: '5-name-0',
    name1: '5-name-1',
    name2: '5-name-2'
  },
  {
    id: '6',
    name: 'XDR有限责任公司',
    address: '中山市',
    introduction: '公司技术和研发实力雄厚',
    employees: 900,
    name0: '6-name-0',
    name1: '6-name-1',
    name2: '6-name-2'
  }
]

export default {
  components: {
    TinyGrid: Grid,
    TinyGridColumn: GridColumn
  },
  data() {
    return {
      columnAnchor: [
        'name',
        ['introduction', '简单介绍'],
        [
          'employees',
          [
            '雇员数量-自定义渲染',
            ({ h, anchor: { active, field, label }, action }) =>
              h(
                'div',
                {
                  class: { 'tiny-grid__column-anchor-item': true, 'tiny-grid__column-anchor-item--active': active },
                  on: { click: (e) => action(field, e) }
                },
                [active ? h(IconMarkOn(), { class: 'tiny-grid__column-anchor-item-icon' }) : null, h('span', label)]
              )
          ]
        ],
        {
          field: 'address', // 列锚点字段
          label: null, // 列锚点名称
          render: null, // 列锚点自定义渲染方法
          active: true, // 是否默认激活
          delay: 30 // 定位延时
        }
      ],
      pagerConfig: {
        component: Pager,
        attrs: {
          currentPage: 1,
          pageSize: 3,
          pageSizes: [3, 5, 10],
          total: 0,
          layout: 'total, sizes, prev, pager, next, jumper'
        }
      },
      fetchData: { api: this.getData }
    }
  },
  methods: {
    getData({ page }) {
      let curPage = page.currentPage
      let pageSize = page.pageSize
      let offset = (curPage - 1) * pageSize

      return new Promise((resolve) => {
        setTimeout(() => {
          let result = tableData.slice(0)
          let total = tableData.length

          result = result.slice(offset, offset + pageSize)

          resolve({ result, page: { total } })
        }, 300)
      })
    }
  }
}
</script>
