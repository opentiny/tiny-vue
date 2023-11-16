<template>
  <div>
    <h4 class="title">开启个性化多列排序：</h4>
    <div>
      <tiny-grid :data="tableData" :sort-config="{ multipleColumnSort: true }">
        <template #toolbar>
          <tiny-grid-toolbar id="custom-sort-1" setting></tiny-grid-toolbar>
        </template>
        <tiny-grid-column field="name" title="名称"></tiny-grid-column>
        <tiny-grid-column field="employees" title="员工数" sortable></tiny-grid-column>
        <tiny-grid-column field="distance" title="距离" sortable></tiny-grid-column>
        <tiny-grid-column field="introduction" title="公司简介" show-overflow></tiny-grid-column>
      </tiny-grid>
    </div>
    <h4 class="title">自定义多列排序：</h4>
    <div>
      <tiny-grid :data="tableData" :sort-config="{ multipleColumnSort: multiSortMethod }">
        <template #toolbar>
          <tiny-grid-toolbar id="custom-sort-2" setting></tiny-grid-toolbar>
        </template>
        <tiny-grid-column field="name" title="名称"></tiny-grid-column>
        <tiny-grid-column field="employees" title="员工数" sortable></tiny-grid-column>
        <tiny-grid-column field="distance" title="距离" sortable></tiny-grid-column>
        <tiny-grid-column field="introduction" title="公司简介" show-overflow></tiny-grid-column>
      </tiny-grid>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Grid as TinyGrid, GridColumn as TinyGridColumn, Pager, GridToolbar as TinyGridToolbar } from '@opentiny/vue'

const tableData = ref([
  {
    id: '1',
    name: 'GFD科技有限公司',
    address: '福州',
    introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。',
    employees: 800,
    distance: 1400
  },
  {
    id: '2',
    name: 'WWW科技有限公司',
    address: '深圳福田区',
    introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。',
    employees: 300,
    distance: 700
  },
  {
    id: '3',
    name: 'RFV有限责任公司',
    address: '中山市',
    introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。',
    employees: 1300,
    distance: 700
  },
  {
    id: '4',
    name: 'TGB科技有限公司',
    address: '龙岩',
    introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。',
    employees: 360,
    distance: 800
  },
  {
    id: '5',
    name: 'YHN科技有限公司',
    address: '韶关',
    introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。',
    employees: 810,
    distance: 1000
  },
  {
    id: '6',
    name: 'WSX科技有限公司',
    address: '黄冈',
    introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。',
    employees: 800,
    distance: 1200
  }
])

const multiSortMethod = ({ $table, tableData, sortColumns }) => {
  tableData = tableData.sort((p, q) => {
    for (let i = 0; i < sortColumns.length; i++) {
      const { property, order } = sortColumns[i]
      const flag = order === 'asc' ? 1 : -1
      const value1 = p[property]
      const value2 = q[property]

      if (value1 !== value2) {
        return value1 > value2 ? flag : -flag
      }
    }

    return 0
  })

  return tableData
}
</script>

<style scoped>
.title {
  font-size: 16px;
  padding: 15px;
  font-weight: bolder;
  color: #444;
}
</style>
