<template>
  <div>
    <tiny-button @click="reverseTable" :reset-time="0">表格反转</tiny-button>
    <tiny-grid :data="tableData" :columns="tableColumn" :show-header="false"> </tiny-grid>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Grid as TinyGrid, Button as TinyButton } from '@opentiny/vue'

const columns = [
  { field: 'name', title: '名称' },
  { field: 'area', title: '区域' },
  { field: 'createdDate', title: '创建时间' },
  { field: 'employees', title: '人数' },
  { field: 'introduction', title: '公司简介' }
]

const data = [
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
]

const reverse = ref(false)
const tableColumn = ref([])
const tableData = ref([])

tableColumn.value = columns
tableData.value = data

function reverseTable() {
  if (reverse.value) {
    tableColumn.value = columns
    tableData.value = data
    reverse.value = false
    return
  }
  reverse.value = true
  tableData.value = columns.map((column) => {
    let item = { 0: column.title }
    tableData.value.forEach((row, rowIndex) => {
      item[rowIndex + 1] = row[column.field]
    })
    return item
  })
  tableColumn.value = [
    {
      field: '0',
      fixed: 'left',
      width: 80
    }
  ].concat(
    tableData.value.map((item, index) => {
      if (!item.field) {
        return {
          field: `${index + 1}`,
          width: 120
        }
      }
    })
  )
}
</script>
