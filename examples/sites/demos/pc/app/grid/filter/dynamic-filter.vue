<template>
  <tiny-grid :data="tableData" @toolbar-button-click="toolbarButtonClickEvent">
    <template #toolbar>
      <tiny-grid-toolbar :buttons="toolbarButtons"> </tiny-grid-toolbar>
    </template>
    <tiny-grid-column type="index" width="60"></tiny-grid-column>
    <tiny-grid-column type="selection" width="60"></tiny-grid-column>
    <tiny-grid-column field="name" title="公司名称" :filter="nameFilter"></tiny-grid-column>
    <tiny-grid-column field="employees" title="员工数"></tiny-grid-column>
    <tiny-grid-column field="createdDate" title="创建日期"></tiny-grid-column>
    <tiny-grid-column field="city" title="城市" :filter="cityFilter"></tiny-grid-column>
  </tiny-grid>
</template>

<script>
import { TinyGrid, TinyGridColumn, TinyGridToolbar } from '@opentiny/vue'

const filteData = [
  { label: '福州', value: '福州' },
  { label: '深圳', value: '深圳' },
  { label: '中山', value: '中山' },
  { label: '龙岩', value: '龙岩' },
  { label: '韶关', value: '韶关' }
]

const nameFilterData = [
  { label: 'GFD 科技 YX 公司', value: 'GFD 科技 YX 公司' },
  { label: 'WWW 科技 YX 公司', value: 'WWW 科技 YX 公司' }
]

let filterNumber = 1

export default {
  components: {
    TinyGrid,
    TinyGridColumn,
    TinyGridToolbar
  },
  data() {
    return {
      toolbarButtons: [
        {
          code: 'changeCityFilter',
          name: '动态改变城市列筛选项'
        }
      ],
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
      cityFilter: {
        multi: true,
        enumable: true,
        defaultFilter: false,
        inputFilter: false,
        values: filteData
      },
      nameFilter: {
        multi: true,
        enumable: true,
        defaultFilter: false,
        inputFilter: true,
        values: () => {
          nameFilterData.push({ label: `GFD 科技 YX 公司 ${filterNumber}`, value: 'GFD 科技 YX 公司' })
          filterNumber++
          return Promise.resolve(nameFilterData)
        }
      }
    }
  },
  methods: {
    toolbarButtonClickEvent({ code, $grid }) {
      switch (code) {
        case 'changeCityFilter': {
          this.cityFilter.values.push({ label: '合肥', value: '合肥' })
          break
        }
      }
    }
  }
}
</script>
