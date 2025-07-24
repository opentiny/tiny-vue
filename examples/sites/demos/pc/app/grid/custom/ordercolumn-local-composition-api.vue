<template>
  <tiny-grid :data="tableData" :resizable="true" border>
    <template #toolbar>
      <tiny-grid-toolbar
        id="custom-sort-columns"
        :resizable="{ storage: true }"
        @save-setting="saveSetting"
        @cancel-setting="cancelSetting"
        @reset-setting="resetSetting"
        :setting="{ storage: 'local', sortable: Sortable }"
      ></tiny-grid-toolbar>
    </template>
    <tiny-grid-column type="index" width="40"></tiny-grid-column>
    <tiny-grid-column type="selection" width="40"></tiny-grid-column>
    <tiny-grid-column field="name" title="名称 (PopEditor)" sortable></tiny-grid-column>
    <tiny-grid-column field="userId" title="创始人 (UserLink)"></tiny-grid-column>
    <tiny-grid-column field="employees" title="员工数 (Numeric)" sortable></tiny-grid-column>
    <tiny-grid-column field="address" title="地址 (Dropdown)" sortable></tiny-grid-column>
    <tiny-grid-column field="ipaddress" title="IP地址 (IpAddress)" sortable></tiny-grid-column>
  </tiny-grid>
</template>

<script setup>
import { ref } from 'vue'
import { TinyGrid, TinyGridColumn, TinyGridToolbar, TinyModal } from '@opentiny/vue'
import Sortable from 'sortablejs'

const tableData = ref([
  {
    id: '1',
    name: 'GFD 科技 YX 公司',
    address: '福州',
    introduction: '公司技术和研发实力雄厚，是国家 863 项目的参与者，并被政府认定为“高新技术企业”。',
    employees: 800
  },
  {
    id: '2',
    name: 'WWW 科技 YX 公司',
    address: '深圳福田区',
    introduction: '公司技术和研发实力雄厚，是国家 863 项目的参与者，并被政府认定为“高新技术企业”。',
    employees: 300
  },
  {
    id: '3',
    name: 'RFV 有限责任公司',
    address: '中山市',
    introduction: '公司技术和研发实力雄厚，是国家 863 项目的参与者，并被政府认定为“高新技术企业”。',
    employees: 1300
  },
  {
    id: '4',
    name: 'TGB 科技 YX 公司',
    address: '龙岩',
    introduction: '公司技术和研发实力雄厚，是国家 863 项目的参与者，并被政府认定为“高新技术企业”。',
    employees: 360
  },
  {
    id: '5',
    name: 'YHN 科技 YX 公司',
    address: '韶关',
    introduction: '公司技术和研发实力雄厚，是国家 863 项目的参与者，并被政府认定为“高新技术企业”。',
    employees: 810
  },
  {
    id: '6',
    name: 'WSX 科技 YX 公司',
    address: '黄冈',
    introduction: '公司技术和研发实力雄厚，是国家 863 项目的参与者，并被政府认定为“高新技术企业”。',
    employees: 800
  }
])

const saveSetting = (settingConfigs) => {
  TinyModal.alert(`点击了确认按钮${JSON.stringify(settingConfigs)}`)
}
const cancelSetting = (settingConfigs) => {
  TinyModal.alert(`点击了取消按钮${JSON.stringify(settingConfigs)}`)
}
const resetSetting = () => {
  TinyModal.alert('点击了重置按钮')
}
</script>
