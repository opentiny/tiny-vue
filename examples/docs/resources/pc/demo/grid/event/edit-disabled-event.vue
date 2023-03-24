<template>
  <div>
    请点击区域华东区
    <tiny-grid
      :data="tableData"
      @edit-disabled="editDisabled"
      :edit-config="{
        trigger: 'click',
        mode: 'cell',
        showStatus: true,
        activeMethod
      }"
    >
      <tiny-grid-column type="index" width="60"></tiny-grid-column>
      <tiny-grid-column field="name" title="名称" sortable :editor="{ component: 'input', autoselect: true }"></tiny-grid-column>
      <tiny-grid-column field="area" title="区域" sortable :editor="{ component: 'select', options }"></tiny-grid-column>
      <tiny-grid-column
        field="createdDate"
        title="创建时间"
        sortable
        :editor="{
          component: 'input',
          attrs: { type: 'date' },
          autoselect: true
        }"
      ></tiny-grid-column>
      <tiny-grid-column
        field="employees"
        title="人数"
        sortable
        :editor="{
          component: 'input',
          attrs: { type: 'number' },
          autoselect: true
        }"
      ></tiny-grid-column>
      <tiny-grid-column
        field="introduction"
        title="公1司简介"
        :editor="{ component: 'input', autoselect: true }"
        sortable
        show-overflow="ellipsis"
      ></tiny-grid-column>
    </tiny-grid>
    <br /><br />
  </div>
</template>

<script lang="jsx">
import { Grid, GridColumn } from '@opentiny/vue'

export default {
  components: {
    TinyGrid: Grid,
    TinyGridColumn: GridColumn
  },
  data() {
    const options = [
      { label: '华中区', value: '华中区' },
      { label: '华东区', value: '华东区' },
      { label: '华南区', value: '华南区' },
      { label: '西南区', value: '西南区' }
    ]
    return {
      options,
      tableData: [
        {
          id: '1',
          name: '点我触发禁止编辑效果',
          area: '华东区',
          address: '福州',
          employees: 300,
          createdDate: '2016-07-08 12:36:22',
          introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
        },
        {
          id: '2',
          name: 'WWW科技YX公司',
          area: '华南区',
          address: '深圳福田区',
          employees: 600,
          createdDate: '2016-07-09 12:36:22',
          introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
        },
        {
          id: '3',
          name: 'RFV有限责任公司',
          area: '华南区',
          address: '中山市',
          employees: 700,
          createdDate: '2020-07-08 12:36:22',
          introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
        },
        {
          id: '4',
          name: 'TGB科技YX公司',
          area: '华东区',
          address: '龙岩',
          employees: 900,
          createdDate: '2021-07-08 12:36:22',
          introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
        },
        {
          id: '5',
          name: 'YHN科技YX公司',
          area: '华南区',
          address: '韶关',
          employees: 300,
          createdDate: '2016-09-08 12:36:22',
          introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
        },
        {
          id: '6',
          name: 'WSX科技YX公司',
          area: '华中区',
          address: '黄冈',
          employees: 300,
          createdDate: '2019-07-08 12:36:22',
          introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
        }
      ]
    }
  },
  methods: {
    editDisabled() {
      alert('激活editDisable事件')
    },
    activeMethod({ row }) {
      return row.area !== '华东区'
    }
  }
}
</script>
