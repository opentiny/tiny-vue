<template>
  <tiny-grid
    :keyboard-config="keyboardConfigData"
    :data="tableData"
    seq-serial
    height="200"
    :edit-config="{ trigger: 'dblclick', mode: 'cell', showStatus: true }"
    :mouse-config="{ selected: true }"
  >
    <tiny-grid-column type="index" width="60"></tiny-grid-column>
    <tiny-grid-column field="name" title="名称" :editor="{ component: 'input', autoselect: true }"></tiny-grid-column>
    <tiny-grid-column field="area" title="区域" :editor="{ component: 'select', options }"></tiny-grid-column>
    <tiny-grid-column
      field="address"
      title="地址"
      :editor="{ component: 'input', autoselect: true }"
    ></tiny-grid-column>
    <tiny-grid-column
      field="introduction"
      title="公司简介"
      :editor="{ component: 'input', autoselect: true }"
      show-overflow="ellipsis"
    ></tiny-grid-column>
  </tiny-grid>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { TinyGrid, TinyGridColumn, TinyModal } from '@opentiny/vue'

const keyboardConfigData = ref({
  isArrow: true, // 是否开启方向键功能，默认 false
  isDel: true, // 是否开启删除键功能，默认 false
  isTab: true, // 是否开启 Tab 键功能，默认 false
  isEdit: true, // 是否开启任意键进入编辑（功能键除外），默认 false
  editMethod({ seq }) {
    TinyModal.message({ message: `seq: ${seq}`, status: 'info' })
  }
})
const options = ref([
  { label: '华北区', value: '华北区' },
  { label: '华东区', value: '华东区' },
  { label: '华南区', value: '华南区' }
])
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
  },
  {
    id: '4',
    name: 'TGBYX 公司',
    area: '华北区',
    address: '梅州',
    introduction: '公司技术和研发实力雄厚，是国家 863 项目的参与者，并被政府认定为“高新技术企业”。'
  },
  {
    id: '5',
    name: 'YHN 科技 YX 公司',
    area: '华南区',
    address: '韶关',
    introduction: '公司技术和研发实力雄厚，是国家 863 项目的参与者，并被政府认定为“高新技术企业”。'
  },
  {
    id: '6',
    name: '康康物业 YX 公司',
    area: '华北区',
    address: '广州天河区',
    introduction: '公司技术和研发实力雄厚，是国家 863 项目的参与者，并被政府认定为“高新技术企业”。'
  },
  {
    id: '7',
    name: '深圳市福德宝网络技术 YX 公司',
    area: '华南区',
    address: '清远',
    introduction: '公司技术和研发实力雄厚，是国家 863 项目的参与者，并被政府认定为“高新技术企业”。'
  },
  {
    id: '8',
    name: '西安门福德宝网络技术 YX 公司',
    area: '华东区',
    address: '厦门',
    introduction: '公司技术和研发实力雄厚，是国家 863 项目的参与者，并被政府认定为“高新技术企业”。'
  },
  {
    id: '9',
    name: 'WWWW 科技股份有限子公司',
    area: '华南区',
    address: '韶关',
    introduction: '公司技术和研发实力雄厚，是国家 863 项目的参与者，并被政府认定为“高新技术企业”。'
  },
  {
    id: '10',
    name: 'WSX 科技 YX 公司',
    area: '华南区',
    address: '广州',
    introduction: '公司技术和研发实力雄厚，是国家 863 项目的参与者，并被政府认定为“高新技术企业”。'
  }
])
</script>
