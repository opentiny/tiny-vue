<template>
  <div>
    <tiny-grid :data="tableData" :resizable="true">
      <template #toolbar>
        <tiny-grid-toolbar
          id="custom-width"
          :resizable="{ storage: true }"
          :setting="{
            simple: true,
            customDisable
          }"
        ></tiny-grid-toolbar>
      </template>
      <tiny-grid-column type="index" width="60"></tiny-grid-column>
      <tiny-grid-column field="name" title="名称" disabled></tiny-grid-column>
      <tiny-grid-column field="employees" title="员工数"></tiny-grid-column>
      <tiny-grid-column field="address" title="地址"></tiny-grid-column>
      <tiny-grid-column field="introduction" title="公司简介" show-overflow></tiny-grid-column>
    </tiny-grid>
  </div>
</template>

<script lang="jsx">
import { TinyGrid, TinyGridColumn, TinyGridToolbar } from '@opentiny/vue'

export default {
  components: {
    TinyGrid,
    TinyGridColumn,
    TinyGridToolbar
  },
  methods: {
    customDisable(column) {
      // 返回 true 禁用此项，反之不禁用
      return column.property === 'employees'
    }
  },
  data() {
    return {
      tableData: [
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
      ]
    }
  }
}
</script>
