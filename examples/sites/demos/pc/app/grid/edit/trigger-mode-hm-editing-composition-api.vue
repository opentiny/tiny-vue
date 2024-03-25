<template>
  <div>
    <h4 class="title">当前处于活动的行索引号（rowIndex）：{{ activedRow }}</h4>
    <tiny-grid
      ref="theGridRef"
      :data="tableData"
      seq-serial
      :edit-config="{ trigger: 'manual', mode: 'cell', autoClear: false }"
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
      <tiny-grid-column title="操作" width="200" align="center">
        <template #default="data">
          <template v-if="$refs.theGridRef && $refs.theGridRef.hasActiveRow(data.row)">
            <tiny-button size="mini" @click="saveRowEvent(data.row)"> 保存 </tiny-button>
            <tiny-button size="mini" @click="cancelRowEvent(data.row)"> 取消 </tiny-button>
          </template>
          <template v-else>
            <tiny-button size="mini" @click="editRowEvent(data.row)"> 编辑 </tiny-button>
          </template>
        </template>
      </tiny-grid-column>
    </tiny-grid>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Grid as TinyGrid, GridColumn as TinyGridColumn, Button as TinyButton } from '@opentiny/vue'

const activedRow = ref('')
const options = ref([
  { label: '华北区', value: '华北区' },
  { label: '华东区', value: '华东区' },
  { label: '华南区', value: '华南区' }
])
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
const theGridRef = ref('theGridRef')

const getActiveRow = () => {
  const activedRowIndex = theGridRef.value.getActiveRow()

  activedRow.value = activedRowIndex ? activedRowIndex.rowIndex : ''
}

const editRowEvent = (row) => {
  if (row.name === 'RFV有限责任公司') {
    // 只激活区域单元格编辑
    theGridRef.value.setActiveCell(row, 'area').then(() => {
      getActiveRow()
    })
  } else {
    // mode: 'cell' 时默认激活第一个单元格
    theGridRef.value.setActiveRow(row).then(() => {
      getActiveRow()
    })
  }
}

const saveRowEvent = () => {
  theGridRef.value.clearActived().then(() => {
    getActiveRow()
  })
}

const cancelRowEvent = () => {
  theGridRef.value.clearActived().then(() => {
    getActiveRow()
  })
}
</script>

<style scoped>
.title {
  font-size: 16px;
  padding: 15px;
  font-weight: bolder;
  color: #444;
}
</style>
