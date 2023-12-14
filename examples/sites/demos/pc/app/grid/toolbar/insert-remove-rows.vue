<template>
  <div>
    <tiny-grid ref="insertGrid" :data="tableData">
      <tiny-grid-column type="index" width="60"></tiny-grid-column>
      <tiny-grid-column type="selection" width="60"></tiny-grid-column>
      <tiny-grid-column field="employees" title="员工数"></tiny-grid-column>
      <tiny-grid-column field="createdDate" title="创建日期"></tiny-grid-column>
      <tiny-grid-column field="city" title="城市"></tiny-grid-column>
      <tiny-grid-column title="操作" width="100">
        <template #default="data">
          <div style="text-align: left; font-size: 16px">
            <icon-plus class="tiny-svg-size" @click="$refs.insertGrid.insertAt(record, data.row)"></icon-plus
            >&nbsp;&nbsp;
            <icon-del class="tiny-svg-size" @click="$refs.insertGrid.remove(data.row)"></icon-del>
          </div>
        </template>
      </tiny-grid-column>
    </tiny-grid>
  </div>
</template>

<script lang="jsx">
import { Grid, GridColumn } from '@opentiny/vue'
import { IconPlus, IconDel } from '@opentiny/vue-icon'

export default {
  components: {
    TinyGrid: Grid,
    TinyGridColumn: GridColumn,
    IconPlus: IconPlus(),
    IconDel: IconDel()
  },
  data() {
    const tableData = [
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
      }
    ]

    return {
      tableData,
      record: {
        id: '8',
        name: '深圳市福德宝网络技术YX公司',
        employees: 540,
        city: '厦门',
        createdDate: '2016-06-03 13:53:25'
      }
    }
  }
}
</script>
