<template>
  <div>
    <tiny-button @click="getCurrentRow()">当前行</tiny-button>
    <tiny-button @click="getRowIndex">当前行号</tiny-button>
    <tiny-button @click="getRadioRow">Radio单选选中行</tiny-button>
    <tiny-button @click="getRowById">rowId获取当前行</tiny-button>
    <tiny-button @click="getRowNode">tr元素获取行信息</tiny-button>
    <br /><br />
    <tiny-grid ref="theGridRef" :data="tableData" highlight-current-row>
      <tiny-grid-column type="index" width="60"></tiny-grid-column>
      <tiny-grid-column type="radio" width="60"></tiny-grid-column>
      <tiny-grid-column field="name" title="名称"></tiny-grid-column>
      <tiny-grid-column field="area" title="区域"></tiny-grid-column>
      <tiny-grid-column field="address" title="地址"></tiny-grid-column>
      <tiny-grid-column field="introduction" title="公司简介" show-overflow="ellipsis"></tiny-grid-column>
    </tiny-grid>
  </div>
</template>

<script setup lang="jsx">
import { ref, getCurrentInstance } from 'vue'
import { Grid as TinyGrid, GridColumn as TinyGridColumn, Button as TinyButton, Modal as TinyModal } from '@opentiny/vue'

const tableData = ref([
  {
    id: '1',
    name: 'GFD科技YX公司',
    area: '华东区',
    address: '福州',
    introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
  },
  {
    id: '2',
    name: 'WWWW科技YX公司',
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
  },
  {
    id: '4',
    name: 'TGBYX公司',
    area: '华北区',
    address: '梅州',
    introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
  },
  {
    id: '5',
    name: 'YHN科技YX公司',
    area: '华南区',
    address: '韶关',
    introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
  },
  {
    id: '6',
    name: '康康物业YX公司',
    area: '华北区',
    address: '广州天河区',
    introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
  }
])
const theGridRef = ref()
const instance = getCurrentInstance()

function getCurrentRow(hideMessage) {
  const data = theGridRef.value.getCurrentRow()

  !hideMessage && TinyModal.alert(`当前行数据是：${JSON.stringify(data)}`)

  return data
}

function getRadioRow() {
  const data = theGridRef.value.getRadioRow()

  TinyModal.alert(`单选选中行数据是：${JSON.stringify(data)}`)
}

function getRowIndex() {
  const row = getCurrentRow(true)
  const data = theGridRef.value.getRowIndex(row)

  TinyModal.alert(`当前选中行号是：${JSON.stringify(data)}`)
}

function getRowById() {
  const row = getCurrentRow(true) || {}
  const data = theGridRef.value.getRowById(row._RID)

  TinyModal.alert(`根据 rowId 获取的当前行：${JSON.stringify(data)}`)
}

function getRowNode() {
  const tr = instance.vnode.el.querySelector('.tiny-grid-body__row')
  const data = theGridRef.value.getRowNode(tr)

  TinyModal.alert(`根据 tr 元素获取对应的 row 信息：${JSON.stringify(data)}`)
}
</script>
