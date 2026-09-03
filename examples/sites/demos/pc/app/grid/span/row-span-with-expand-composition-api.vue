<template>
  <tiny-grid :row-span="rowSpanFields" :data="tableData">
    <tiny-grid-column type="index" width="60"></tiny-grid-column>
    <tiny-grid-column type="expand" width="60">
      <template #default="{ row }">
        <ul>
          <li>
            <span>公司名称：</span>
            <span>{{ row.name }}</span>
          </li>
          <li>
            <span>区域：</span>
            <span>{{ row.area }}</span>
          </li>
          <li>
            <span>城市：</span>
            <span>{{ row.city }}</span>
          </li>
        </ul>
      </template>
    </tiny-grid-column>
    <tiny-grid-column field="area" title="区域"></tiny-grid-column>
    <tiny-grid-column field="province" title="省份"></tiny-grid-column>
    <tiny-grid-column field="city" title="城市"></tiny-grid-column>
    <tiny-grid-column field="name" title="公司名称"></tiny-grid-column>
  </tiny-grid>
</template>

<script setup>
import { ref } from 'vue'
import { TinyGrid, TinyGridColumn } from '@opentiny/vue'

const rowSpanFields = ref([{ field: 'area' }, { field: 'province' }])
const tableData = ref([
  {
    id: '1',
    name: 'WWW 科技 YX 公司',
    area: '华南区',
    province: '广东省',
    city: '深圳'
  },
  {
    id: '2',
    name: 'RFV 有限责任公司',
    area: '华南区',
    province: '广东省',
    city: '中山'
  },
  {
    id: '3',
    name: 'YHN 科技 YX 公司',
    area: '华南区',
    province: '广东省',
    city: '韶关'
  },
  {
    id: '4',
    name: 'GFD 科技 YX 公司',
    area: '华东区',
    province: '福建省',
    city: '福州'
  },
  {
    id: '5',
    name: 'TGB 科技 YX 公司',
    area: '华东区',
    province: '福建省',
    city: '龙岩'
  }
])
</script>
