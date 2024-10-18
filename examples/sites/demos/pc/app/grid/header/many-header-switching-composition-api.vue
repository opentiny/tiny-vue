<template>
  <div>
    <!-- button -->
    <tiny-button class="mb-12" @click="flag = !flag">{{ (flag ? '删除' : '新增') + '子表头' }}</tiny-button>
    <!-- grid -->
    <tiny-grid :data="tableData" resizable :edit-config="{ trigger: 'click', mode: 'cell', showStatus: true }">
      <tiny-grid-column title="操作" header-align="center">
        <tiny-grid-column type="index" width="60"></tiny-grid-column>
        <tiny-grid-column type="selection" width="48" v-if="flag"></tiny-grid-column>
        <tiny-grid-column :renderer="rendererCellOperate" width="100" v-if="flag"></tiny-grid-column>
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
  </div>
</template>

<script lang="jsx" setup>
import { Grid as TinyGrid, GridColumn as TinyGridColumn, Button as TinyButton } from '@opentiny/vue'
import { h } from '@opentiny/vue-common'
import { ref } from 'vue'
import {
  iconAdministrator,
  iconVersiontree,
  iconMarkOn,
  iconUser,
  iconAssociation,
  iconHelpful
} from '@opentiny/vue-icon'

function renderHeaderDescription() {
  return h('span', [h(iconAdministrator()), 'Description'])
}
function renderHeaderRelation() {
  return h('span', [h(iconVersiontree())])
}
function renderHeaderArea() {
  return h('span', [h(iconMarkOn()), 'Description'])
}
function renderHeaderAddress() {
  return h('span', [h(iconUser()), 'Description'])
}
function rendererCellOperate() {
  return h('div', { style: 'text-align:center;font-size:16px;' }, [h(iconHelpful()), h(iconAssociation())])
}

const flag = ref(false)

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
  }
])
const options = ref([
  { label: '华北区', value: '华北区' },
  { label: '华东区', value: '华东区' },
  { label: '华南区', value: '华南区' }
])
</script>

<style scoped>
.mb-12 {
  margin-bottom: 12px;
}
</style>
