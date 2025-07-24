<template>
  <tiny-grid
    ref="changeGridRef"
    :data="tableData"
    seq-serial
    show-overflow="tooltip"
    :edit-config="{ trigger: 'click', mode: 'row', showStatus: true }"
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
    <tiny-grid-column title="操作" width="100">
      <template #default="data">
        <tiny-button size="mini" @click="handleSave(data.row)">保存</tiny-button>
      </template>
    </tiny-grid-column>
  </tiny-grid>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { TinyGrid, TinyGridColumn, TinyButton, TinyModal } from '@opentiny/vue'

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
  }
])
const changeGridRef = ref()

function handleSave(row) {
  changeGridRef.value.clearActived().then(() => {
    if (!changeGridRef.value.hasRowChange(row)) {
      TinyModal.alert('当前数据未改变！')
    } else {
      TinyModal.alert('保存成功！')
    }
  })
}
</script>
