<template>
  <tiny-tabs v-model="activeName" class="demo">
    <template #custom><span class="the-only-class"></span></template>
    <tiny-tab-item title="表单组件" name="first"> 表单组件,具有与用户交互，并可完成数据采集功能的控件。 </tiny-tab-item>
    <tiny-tab-item title="数据组件" name="second">
      <tiny-grid :data="tableData" :resizable="true">
        <template #toolbar>
          <tiny-grid-toolbar
            id="custom-width"
            :resizable="{ storage: true }"
            :setting="{ showIndex: true }"
            teleport-to=".the-only-class"
          ></tiny-grid-toolbar>
        </template>
        <tiny-grid-column field="name" title="名称"></tiny-grid-column>
        <tiny-grid-column field="employees" title="员工数"></tiny-grid-column>
        <tiny-grid-column field="address" title="地址"></tiny-grid-column>
        <tiny-grid-column field="introduction" title="公司简介" show-overflow></tiny-grid-column>
      </tiny-grid>
    </tiny-tab-item>
  </tiny-tabs>
</template>

<script>
import { Grid, GridColumn, GridToolbar, Tabs, TabItem } from '@opentiny/vue'

export default {
  components: {
    TinyGrid: Grid,
    TinyGridColumn: GridColumn,
    TinyGridToolbar: GridToolbar,
    TinyTabs: Tabs,
    TinyTabItem: TabItem
  },
  provide() {
    return { 'TinyMode': 'mobile-first' }
  },
  data() {
    return {
      activeName: 'first',
      tableData: [
        {
          id: '1',
          name: 'GFD科技有限公司',
          address: '福州',
          introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。',
          employees: 800
        },
        {
          id: '2',
          name: 'WWW科技有限公司',
          address: '深圳福田区',
          introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。',
          employees: 300
        },
        {
          id: '3',
          name: 'RFV有限责任公司',
          address: '中山市',
          introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。',
          employees: 1300
        },
        {
          id: '4',
          name: 'TGB科技有限公司',
          address: '龙岩',
          introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。',
          employees: 360
        },
        {
          id: '5',
          name: 'YHN科技有限公司',
          address: '韶关',
          introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。',
          employees: 810
        },
        {
          id: '6',
          name: 'WSX科技有限公司',
          address: '黄冈',
          introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。',
          employees: 800
        }
      ]
    }
  }
}
</script>

<style>
.demo .tiny-grid-toolbar {
  padding-top: 0;
  padding-bottom: 0;
}

.demo .tiny-grid-button__wrapper {
  display: block;
}
</style>
