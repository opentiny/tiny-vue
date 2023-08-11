<template>
  <tiny-grid resizable seq-serial :data="tableData" @toolbar-button-click="toolbarButtonClickEvent">
    <template #toolbar>
      <tiny-grid-toolbar :buttons="toolbarButtons"> </tiny-grid-toolbar>
    </template>
    <tiny-grid-column type="index" width="60"></tiny-grid-column>
    <tiny-grid-column type="selection" width="60"></tiny-grid-column>
    <tiny-grid-column type="expand" title="操作" width="60">
      <template #default>
        <tiny-grid :data="expandTableData">
          <tiny-grid-column field="name" title="名称"></tiny-grid-column>
          <tiny-grid-column field="area" title="地区"></tiny-grid-column>
          <tiny-grid-column field="address" title="城市"></tiny-grid-column>
          <tiny-grid-column field="introduction" title="公司简介" show-overflow></tiny-grid-column>
        </tiny-grid>
      </template>
    </tiny-grid-column>
    <tiny-grid-column field="employees" title="员工数"></tiny-grid-column>
    <tiny-grid-column field="createdDate" title="创建日期"></tiny-grid-column>
    <tiny-grid-column field="city" title="城市"></tiny-grid-column>
    <tiny-grid-column
      field="boole"
      title="布尔值"
      format-text="boole"
      header-align="left"
      align="center"
    ></tiny-grid-column>
  </tiny-grid>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Grid as TinyGrid, GridColumn as TinyGridColumn, GridToolbar as TinyGridToolbar } from '@opentiny/vue'

const toolbarButtons = ref([
  {
    code: 'clearRowExpand',
    name: '手动清空展开行状态'
  }
])
const tableData = ref([
  {
    id: '1',
    name: 'GFD科技YX公司',
    userId: 421000103624183,
    area: '华东区',
    province: '福建省',
    city: '福州',
    contact: '许生',
    telephone: '1234567890',
    address: '福州',
    ipaddress: '192.168.111.111',
    introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。',
    employees: 800,
    createdDate: '2014-04-30 00:56:00',
    boole: false,
    assets: '1000000',
    rate: 0.9
  },
  {
    id: '2',
    name: 'WWW科技YX公司',
    userId: 421000103624183,
    area: '华南区',
    province: '广东省',
    city: '深圳',
    contact: '朱生',
    telephone: '1234567890',
    address: '深圳福田区',
    ipaddress: '192.168.111.1',
    introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。',
    employees: 300,
    createdDate: '2016-07-08 12:36:22',
    boole: true,
    assets: '1500000',
    rate: 0.7
  },
  {
    id: '3',
    name: 'RFV有限责任公司',
    userId: 441047913162396,
    area: '华南区',
    province: '广东省',
    city: '中山',
    contact: '秦生',
    telephone: '1234567890',
    address: '中山市',
    ipaddress: '192.168.111.120',
    introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。',
    employees: 1300,
    createdDate: '2014-02-14 14:14:14',
    boole: false,
    assets: '1500000',
    rate: 0.6
  },
  {
    id: '4',
    name: 'TGB科技YX公司',
    userId: 702973890055088,
    area: '华东区',
    province: '福建省',
    city: '龙岩',
    contact: '周生',
    telephone: '1234567890',
    address: '龙岩',
    ipaddress: '192.168.11.111',
    introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。',
    employees: 360,
    createdDate: '2013-01-13 13:13:13',
    boole: true,
    assets: '1200000',
    rate: 0.5
  },
  {
    id: '5',
    name: 'YHN科技YX公司',
    userId: 702973890055088,
    area: '华南区',
    province: '广东省',
    city: '韶关',
    contact: '郑生',
    telephone: '1234567890',
    address: '韶关',
    ipaddress: '192.168.101.111',
    introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。',
    employees: 810,
    createdDate: '2012-12-12 12:12:12',
    boole: true,
    assets: '1500000',
    rate: 0.6
  }
])
const expandTableData = ref([
  {
    id: '1',
    name: 'GFD科技YX公司',
    area: '华东区',
    address: '福州',
    introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
  },
  {
    id: '2',
    name: 'WWW科技YX公司',
    area: '华南区',
    address: '深圳福田区',
    introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
  },
  {
    id: '3',
    name: 'RFV有限责任公司',
    area: '华南区',
    address: '中山市',
    introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
  }
])

function toolbarButtonClickEvent({ code, $grid }) {
  switch (code) {
    case 'clearRowExpand': {
      $grid.clearRowExpand()
      break
    }
  }
}
</script>
