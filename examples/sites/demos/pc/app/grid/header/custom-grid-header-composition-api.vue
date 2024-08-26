<template>
  <tiny-grid :data="tableData" resizable :edit-config="{ trigger: 'click', mode: 'cell', showStatus: true }">
    <tiny-grid-column title="操作" header-align="center">
      <tiny-grid-column type="index" width="40"></tiny-grid-column>
      <tiny-grid-column type="selection" width="48"></tiny-grid-column>
      <tiny-grid-column :renderer="rendererCellOperate" width="100"></tiny-grid-column>
    </tiny-grid-column>
    <tiny-grid-column :title="renderHeaderDescription" header-align="center">
      <tiny-grid-column field="name" title="名称" show-tip sortable></tiny-grid-column>
      <tiny-grid-column
        field="area"
        :title="renderHeaderArea"
        :editor="{ component: 'select', options }"
        sortable
      ></tiny-grid-column>
    </tiny-grid-column>
    <tiny-grid-column :title="renderHeaderRelation" header-align="center">
      <tiny-grid-column
        field="address"
        :title="renderHeaderAddress"
        :editor="{ component: 'input', autoselect: true }"
        sortable
      ></tiny-grid-column>
      <tiny-grid-column
        field="introduction"
        title="公司简介"
        :editor="{ component: 'input', autoselect: true }"
        sortable
        show-overflow="title"
      ></tiny-grid-column>
    </tiny-grid-column>
  </tiny-grid>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Grid as TinyGrid, GridColumn as TinyGridColumn } from '@opentiny/vue'
import {
  iconAdministrator,
  iconVersiontree,
  iconMarkOn,
  iconUser,
  iconAssociation,
  iconHelpful
} from '@opentiny/vue-icon'

const IconVersiontree = iconVersiontree()
const IconAdministrator = iconAdministrator()
const IconMarkOn = iconMarkOn()
const IconUser = iconUser()
const IconAssociation = iconAssociation()
const IconHelpful = iconHelpful()
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
const options = ref([
  { label: '华北区', value: '华北区' },
  { label: '华东区', value: '华东区' },
  { label: '华南区', value: '华南区' }
])

function renderHeaderDescription() {
  return (
    <span>
      {' '}
      <IconAdministrator />
      Description
    </span>
  )
}

function renderHeaderRelation() {
  return (
    <span>
      <IconVersiontree />
    </span>
  )
}

function renderHeaderArea() {
  return (
    <span>
      <IconMarkOn />
      Description
    </span>
  )
}

function renderHeaderAddress() {
  return (
    <span>
      <IconUser />
      Description
    </span>
  )
}

function rendererCellOperate() {
  return (
    <div style="text-align: center; font-size: 16px;">
      <IconHelpful />
      &nbsp;&nbsp;
      <IconAssociation />
    </div>
  )
}
</script>
