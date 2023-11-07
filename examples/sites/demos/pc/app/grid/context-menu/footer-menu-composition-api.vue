<template>
  <div>
    <tiny-grid
      :data="tableData"
      :context-menu="{
        body: { options: bodyMenus },
        footer: { options: footerMenus },
        visibleMethod
      }"
      show-footer
      :footer-method="footerMethod"
      @context-menu-click="contextMenuClickEvent"
    >
      <tiny-grid-column type="index" width="60"></tiny-grid-column>
      <tiny-grid-column field="name" title="名称"></tiny-grid-column>
      <tiny-grid-column field="area" title="区域"></tiny-grid-column>
      <tiny-grid-column field="createdDate" title="创建时间"></tiny-grid-column>
      <tiny-grid-column field="employees" title="人数"></tiny-grid-column>
      <tiny-grid-column field="introduction" title="公司简介"></tiny-grid-column>
    </tiny-grid>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Grid as TinyGrid, GridColumn as TinyGridColumn, Modal } from '@opentiny/vue'

const bodyMenus = ref([
  [
    {
      code: 'remove',
      name: '删除'
    },
    {
      code: 'filter',
      name: '筛选'
    },
    {
      code: 'sort',
      name: '排序'
    },
    {
      code: 'print',
      name: '打印',
      disabled: true
    }
  ]
])
const footerMenus = ref([
  [
    {
      code: 'clearAll',
      name: '清空数据',
      visible: true,
      disabled: false
    },
    {
      code: 'deletAll',
      name: '删除数据',
      visible: true,
      disabled: false
    }
  ]
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

function footerMethod({ columns, data }) {
  return [
    columns.map((column, columnIndex) => {
      if (columnIndex === 1) {
        return '总计人数'
      }
      if (~['employees'].indexOf(column.property)) {
        let sumEmployees = 0
        for (let i = 0; i < data.length; i++) {
          sumEmployees = data[i][column.property] + sumEmployees
        }
        return sumEmployees
      }
      return null
    })
  ]
}

function visibleMethod({ options, column }) {
  const isVisible =
    column && (column.property === 'name' || column.property === 'area' || column.property === 'telephone')
  const isDisabled = !column || column.property !== 'area'

  options.forEach((list) => {
    list.forEach((item) => {
      if (~['deletAll'].indexOf(item.code)) {
        item.disabled = isDisabled
      }
      item.visible = isVisible
    })
  })
  return true
}

function contextMenuClickEvent({ menu, row, column }) {
  switch (menu.code) {
    case 'copy':
      if (row && column) {
        Modal.message({ message: `${row.id}`, status: 'info' })
      }
      break
    default:
      Modal.alert(`点击了 ${menu.name} 选项`)
  }
}
</script>
