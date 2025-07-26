<template>
  <div>
    <tiny-grid :data="tableData" :edit-config="{ trigger: 'click', mode: 'cell', showStatus: true }" height="420px">
      <tiny-grid-column type="index" width="60"></tiny-grid-column>
      <tiny-grid-column type="selection" width="60"></tiny-grid-column>
      <tiny-grid-column field="company" title="公司名称"></tiny-grid-column>
      <tiny-grid-column field="employees" title="员工数"></tiny-grid-column>
      <tiny-grid-column field="createdDate" title="创建日期"></tiny-grid-column>
      <tiny-grid-column field="city" title="城市"></tiny-grid-column>
    </tiny-grid>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { TinyGrid, TinyGridColumn } from '@opentiny/vue'

// 初始化表格数据
const _table = [
  { company: 'GFD 有限责任公司', city: '广州', employees: 800, createdDate: '2014-04-30 00:56:00' },
  { company: 'AWE 有限责任公司', city: '深圳', employees: 500, createdDate: '2015-05-01 01:01:01' },
  { company: 'ASD 有限责任公司', city: '中山', employees: 400, createdDate: '2013-03-03 03:03:03' },
  { company: 'ZXC 有限责任公司', city: '广州', employees: 1000, createdDate: '2012-02-02 02:02:02' },
  { company: 'VBN 有限责任公司', city: '深圳', employees: 600, createdDate: '2011-01-01 01:01:01' },
  { company: 'QWE 有限责任公司', city: '中山', employees: 700, createdDate: '2016-08-08 08:08:08' },
  { company: 'RTY 有限责任公司', city: '广州', employees: 900, createdDate: '2015-09-09 09:09:09' },
  { company: 'UIO 有限责任公司', city: '深圳', employees: 1100, createdDate: '2014-10-10 10:10:10' },
  { company: 'HJK 有限责任公司', city: '中山', employees: 1200, createdDate: '2013-11-11 11:11:11' },
  { company: 'WWW 有限责任公司', city: '深圳', employees: 300, createdDate: '2016-07-08 12:36:22' },
  { company: 'RFV 有限责任公司', city: '中山', employees: 1300, createdDate: '2014-02-14 14:14:14' },
  { company: 'TGB 有限责任公司', city: '广州', employees: 360, createdDate: '2013-01-13 13:13:13' },
  { company: 'YHN 有限责任公司', city: '深圳', employees: 810, createdDate: '2012-12-12 12:12:12' },
  { company: 'WSX 有限责任公司', city: '中山', employees: 800, createdDate: '2011-11-11 11:11:11' },
  { company: 'KBG 有限责任公司', city: '深圳', employees: 400, createdDate: '2014-04-30 23:56:00' },
  { company: 'SZB 有限责任公司', city: '深圳', employees: 1400, createdDate: '2016-06-03 13:53:25' }
]

const tableData = ref(_table)
</script>
