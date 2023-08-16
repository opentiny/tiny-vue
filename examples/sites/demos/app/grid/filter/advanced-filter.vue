<template>
  <tiny-grid ref="clearfiltergrid" :data="tableData" @filter-change="filterChangeEvent">
    <tiny-grid-column type="index" width="60"></tiny-grid-column>
    <tiny-grid-column type="selection" width="60"></tiny-grid-column>
    <tiny-grid-column field="name" title="公司名称" :filter="nameFilter"></tiny-grid-column>
    <tiny-grid-column field="employees" title="员工数" :filter="employeesFilter"></tiny-grid-column>
    <tiny-grid-column field="createdDate" title="创建日期" :filter="dateFilter"></tiny-grid-column>
    <tiny-grid-column field="city" title="城市" :filter="cityFilter"></tiny-grid-column>
  </tiny-grid>
</template>

<script lang="jsx">
import { Grid, GridColumn, DatePicker, Numeric, Modal } from '@opentiny/vue'

const filteData = [
  { label: '福州', value: '福州' },
  { label: '深圳', value: '深圳' },
  { label: '中山', value: '中山' },
  { label: '龙岩', value: '龙岩' },
  { label: '韶关', value: '韶关' }
]

export default {
  components: {
    TinyGrid: Grid,
    TinyGridColumn: GridColumn
  },
  data() {
    return {
      toolbarButtons: [
        {
          code: 'clearFilter',
          name: '清空表格所有过滤条件'
        },
        {
          code: 'clearFilterName',
          name: '清空表格name字段的过滤条件'
        },
        {
          code: 'closeFilter',
          name: '手动关闭筛选面板'
        }
      ],
      tableData: [
        {
          id: '1',
          name: 'GFD科技YX公司',
          city: '福州',
          employees: 800,
          createdDate: '2014-04-30 00:56:00'
        },
        {
          id: '2',
          name: 'WWW科技YX公司',
          city: '深圳',
          employees: 300,
          createdDate: '2016-07-08 12:36:22'
        },
        {
          id: '3',
          name: 'RFV有限责任公司',
          city: '中山',
          employees: 1300,
          createdDate: '2014-02-14 14:14:14'
        },
        {
          id: '4',
          name: 'TGB科技YX公司',
          city: '龙岩',
          employees: 360,
          createdDate: '2013-01-13 13:13:13'
        },
        {
          id: '5',
          name: 'YHN科技YX公司',
          city: '韶关',
          employees: 810,
          createdDate: '2012-12-12 12:12:12'
        },
        {
          id: '6',
          name: 'WSX科技YX公司',
          city: '黄冈',
          employees: 800,
          createdDate: '2011-11-11 11:11:11'
        },
        {
          id: '7',
          name: 'KBG物业YX公司',
          city: '赤壁',
          employees: 400,
          createdDate: '2016-04-30 23:56:00'
        },
        {
          id: '8',
          name: '深圳市福德宝网络技术YX公司',
          city: '厦门',
          employees: 540,
          createdDate: '2016-06-03 13:53:25'
        },
        {
          id: '9',
          name: 'xxx络技术YX公司',
          city: '深圳',
          employees: 540,
          createdDate: '2016-06-03 13:53:25'
        }
      ],
      cityFilter: {
        multi: true,
        enumable: true,
        defaultFilter: false,
        inputFilter: true,
        values: filteData
      },
      employeesFilter: {
        layout: 'input,enum,default,extends,base',
        inputFilter: {
          component: Numeric,
          attrs: { format: 'yyyy/MM/dd hh:mm:ss' },
          relations: [
            {
              label: '小于',
              value: 'A',
              method: ({ value, input }) => {
                return value < input
              }
            },
            { label: '等于', value: 'equals' },
            { label: '大于', value: 'greaterThan' }
            // value内置有如下取值，不满足时请传method
            // 等于 equals
            // 不等于unequal
            // 大于greaterThan
            // 小于lessThan
            // 大于等于equalToGreaterThan
            // 小于等于equalToLessThan
            // 包含contains
            // 不包含exclude
            // 开头是startwith
            // 结尾是endwith
          ]
        },
        extends: [
          {
            label: '我要过滤大于800的数', // 服务端过滤不需要配置method, 如果没有配置value值，默认会取label值
            method: ({ value }) => {
              return value > 800
            }
          },
          {
            label: '我要过滤全部的数...',
            method: () => {
              return true
            }
          }
        ]
      },
      dateFilter: {
        inputFilter: {
          component: DatePicker,
          attrs: {
            format: 'yyyy-MM-dd hh:mm:ss',
            valueFormat: 'yyyy-MM-dd hh:mm:ss'
          },
          relations: [
            { label: '早于', value: 'lessThan' },
            { label: '晚于', value: 'greaterThan' }
          ]
        }
      },
      nameFilter: {
        multi: false,
        enumable: false,
        defaultFilter: false,
        inputFilter: true,
        advancedFilter: false
      }
    }
  },
  methods: {
    filterChangeEvent({ filters }) {
      Modal.message({ message: `${JSON.stringify(filters)}`, status: 'info' })
    }
  }
}
</script>
