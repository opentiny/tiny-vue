<template>
  <div>
    <tiny-grid :data="tableData" :edit-config="{ trigger: 'click', mode: 'row', showStatus: true }">
      <tiny-grid-column type="index" width="60"></tiny-grid-column>
      <tiny-grid-column field="name" title="插槽自定义列编辑" :editor="{}">
        <template #edit="data">
          <tiny-input v-model="data.row.name" placeholder="请输入内容"></tiny-input>
        </template>
      </tiny-grid-column>
      <tiny-grid-column field="date" title="下班时间" :editor="{}">
        <template #edit="data">
          <tiny-time-picker v-model="data.row.date" @change="change"></tiny-time-picker>
        </template>
        <template #default="data">
          {{ data.row.date.toTimeString().substr(0, 8) }}
        </template>
      </tiny-grid-column>
      <tiny-grid-column field="employees" title="员工人数"></tiny-grid-column>
      <tiny-grid-column field="area" title="所属区域"></tiny-grid-column>
      <tiny-grid-column field="address" title="地址"></tiny-grid-column>
      <tiny-grid-column field="introduction" title="公司简介" show-overflow></tiny-grid-column>
    </tiny-grid>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { TinyGrid, TinyGridColumn, TinyInput, TinyTimePicker, TinyModal } from '@opentiny/vue'

function change() {
  TinyModal.message({ message: '下班时间编辑完成', status: 'info' })
}

const tableData = ref([
  {
    id: '1',
    name: 'GFD 科技 YX 公司',
    area: '华东区',
    address: '福州',
    employees: 423,
    date: new Date(2016, 9, 10, 17, 0)
  },
  {
    id: '2',
    name: 'WWWW 科技 YX 公司',
    area: '华南区',
    address: '深圳福田区',
    employees: 363,
    date: new Date(2016, 9, 10, 17, 0)
  },
  {
    id: '3',
    name: 'RFV 有限责任公司',
    area: '华南区',
    address: '中山市',
    employees: 131,
    date: new Date(2016, 9, 10, 17, 0)
  },
  {
    id: '4',
    name: 'TGBYX 公司',
    area: '华北区',
    address: '梅州',
    employees: 215,
    date: new Date(2016, 9, 10, 17, 0)
  },
  {
    id: '5',
    name: 'YHN 科技 YX 公司',
    area: '华南区',
    address: '韶关',
    employees: 322,
    date: new Date(2016, 9, 10, 17, 0)
  },
  {
    id: '6',
    name: '康康物业 YX 公司',
    area: '华北区',
    address: '广州天河区',
    employees: 168,
    date: new Date(2016, 9, 10, 17, 0)
  }
])
</script>
