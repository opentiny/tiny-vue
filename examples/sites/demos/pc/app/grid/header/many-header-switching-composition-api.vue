<template>
  <div>
    <div>
      <tiny-button @click="flag = !flag">{{ (flag ? '删除' : '新增') + '子表头' }}</tiny-button>
    </div>
    <br />
    <tiny-grid :data="tableData" resizable :edit-config="{ trigger: 'click', mode: 'cell', showStatus: true }">
      <tiny-grid-column title="操作" header-align="center">
        <tiny-grid-column type="index" width="60"></tiny-grid-column>
        <tiny-grid-column type="selection" width="48" v-if="flag"></tiny-grid-column>
        <tiny-grid-column field="id" title="id" width="100" v-if="flag"></tiny-grid-column>
      </tiny-grid-column>
      <tiny-grid-column title="地址信息" header-align="center">
        <tiny-grid-column field="name" title="名称" show-tip sortable></tiny-grid-column>
        <tiny-grid-column
          field="area"
          title="地区"
          :editor="{ component: 'select', options }"
          sortable
        ></tiny-grid-column>
      </tiny-grid-column>
      <tiny-grid-column title="其他信息" header-align="center">
        <tiny-grid-column
          field="address"
          title="地址"
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
import { TinyGrid, TinyGridColumn, TinyButton } from '@opentiny/vue'
import { ref } from 'vue'

const flag = ref(false)

const tableData = ref([
  {
    id: '1',
    name: 'GFD 科技 YX 公司',
    area: '华东区',
    address: '福州',
    introduction: '公司技术和研发实力雄厚，是国家 863 项目的参与者，并被政府认定为“高新技术企业”。'
  },
  {
    id: '2',
    name: 'WWWW 科技 YX 公司',
    area: '华南区',
    address: '深圳福田区',
    introduction: '公司技术和研发实力雄厚，是国家 863 项目的参与者，并被政府认定为“高新技术企业”。'
  },
  {
    id: '3',
    name: 'RFV 有限责任公司',
    area: '华南区',
    address: '中山市',
    introduction: '公司技术和研发实力雄厚，是国家 863 项目的参与者，并被政府认定为“高新技术企业”。'
  }
])
const options = ref([
  { label: '华北区', value: '华北区' },
  { label: '华东区', value: '华东区' },
  { label: '华南区', value: '华南区' }
])
</script>
