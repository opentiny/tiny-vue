<template>
  <tiny-grid :data="tableData">
    <tiny-grid-column type="index" width="60"></tiny-grid-column>
    <tiny-grid-column field="date1" title="日期1" format-text="date"></tiny-grid-column>
    <tiny-grid-column field="date2" title="日期2" format-text="date"></tiny-grid-column>
    <tiny-grid-column
      field="date3"
      title="日期3"
      format-text="date"
      :format-config="{ valueFormat: 'dd/MM/yyyy' }"
    ></tiny-grid-column>
    <tiny-grid-column
      field="date4"
      title="日期4"
      format-text="date"
      :format-config="{ valueFormat: 'dd/MM/yyyy' }"
    ></tiny-grid-column>
    <tiny-grid-column
      field="date5"
      title="日期5"
      format-text="date"
      :format-config="{ valueFormat: 'MM/dd/yyyy' }"
    ></tiny-grid-column>
  </tiny-grid>
</template>

<script setup>
import { ref } from 'vue'
import { Grid as TinyGrid, GridColumn as TinyGridColumn } from '@opentiny/vue'
const tableData = ref([
  {
    id: '1',
    date1: 1719849600000,
    date2: new Date(),
    date3: '07/02/2024', // Date.parse 能正常解析，但是被解析为 7 月 2 号
    date4: '15/02/2024', // Date.parse 不能正常解析
    date5: '02/15/2024' // Date.parse 能正常解析为 2 月 15 号
  }
])
</script>
