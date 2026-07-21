<template>
  <tiny-grid :data="tableData" @filter-change="filterChangeEvent">
    <tiny-grid-column type="index" width="60"></tiny-grid-column>
    <tiny-grid-column field="name" title="公司名称" :filter="nameFilter"></tiny-grid-column>
    <tiny-grid-column field="city" title="城市" :filter="cityFilter"></tiny-grid-column>
    <tiny-grid-column field="employees" title="员工数" :filter="employeesFilter"></tiny-grid-column>
  </tiny-grid>
</template>

<script>
import { TinyGrid, TinyGridColumn, TinyModal, TinyNumeric } from '@opentiny/vue'

const cityData = [
  { label: '福州', value: '福州' },
  { label: '深圳', value: '深圳' },
  { label: '中山', value: '中山' }
]

export default {
  components: {
    TinyGrid,
    TinyGridColumn
  },
  data() {
    return {
      tableData: [
        {
          id: '1',
          name: 'GFD 科技 YX 公司',
          city: '福州',
          employees: 800,
          createdDate: '2014-04-30 00:56:00'
        },
        {
          id: '2',
          name: 'WWW 科技 YX 公司',
          city: '深圳',
          employees: 300,
          createdDate: '2016-07-08 12:36:22'
        },
        {
          id: '3',
          name: 'RFV 有限责任公司',
          city: '中山',
          employees: 1300,
          createdDate: '2014-02-14 14:14:14'
        },
        {
          id: '4',
          name: 'TGB 科技 YX 公司',
          city: '龙岩',
          employees: 360,
          createdDate: '2013-01-13 13:13:13'
        },
        {
          id: '5',
          name: 'YHN 科技 YX 公司',
          city: '韶关',
          employees: 810,
          createdDate: '2012-12-12 12:12:12'
        },
        {
          id: '6',
          name: 'WSX 科技 YX 公司',
          city: '黄冈',
          employees: 800,
          createdDate: '2011-11-11 11:11:11'
        },
        {
          id: '7',
          name: 'KBG 物业 YX 公司',
          city: '赤壁',
          employees: 400,
          createdDate: '2016-04-30 23:56:00'
        },
        {
          id: '8',
          name: '深圳市福德宝网络技术 YX 公司',
          city: '厦门',
          employees: 540,
          createdDate: '2016-06-03 13:53:25'
        }
      ],
      // layout 自定义顺序：枚举优先，其次输入，最后清除
      cityFilter: {
        multi: true,
        enumable: true,
        inputFilter: false,
        defaultFilter: false,
        values: cityData,
        layout: 'enum,base'
      },
      nameFilter: {
        enumable: false,
        inputFilter: true,
        defaultFilter: false,
        layout: 'input,base'
      },
      // layout 自定义顺序：扩展项 + 输入 + 清除
      employeesFilter: {
        layout: 'extends,input,base',
        inputFilter: {
          component: TinyNumeric,
          attrs: {},
          relations: [
            { label: '小于', value: 'lessThan' },
            { label: '大于', value: 'greaterThan' }
          ]
        },
        extends: [
          { label: '大型企业(>500)', method: ({ value }) => value > 500 },
          { label: '小型企业(<500)', method: ({ value }) => value < 500 }
        ]
      }
    }
  },
  methods: {
    filterChangeEvent({ filters }) {
      TinyModal.message({ message: `筛选条件：${JSON.stringify(filters)}`, status: 'info' })
    }
  }
}
</script>
