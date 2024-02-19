<template>
  <tiny-grid ref="grid" :data="tableData" seq-serial show-overflow="ellipsis">
    <tiny-grid-column type="index" width="60"></tiny-grid-column>
    <tiny-grid-column field="name" title="名称" :renderer="renderInput('name')">
      <template #header="{ column }">
        <i class="tiny-icon tiny-grid-required-icon"></i>
        <span>{{ column.title }}</span>
      </template>
    </tiny-grid-column>
    <tiny-grid-column field="area" title="区域" :renderer="renderSelect('area')"></tiny-grid-column>
    <tiny-grid-column field="address" title="地址" :renderer="renderInput('address')"></tiny-grid-column>
    <tiny-grid-column field="introduction" title="公司简介" :renderer="renderInput('introduction')"></tiny-grid-column>
    <tiny-grid-column title="操作" width="200" align="center">
      <template #default="{ row }">
        <template v-if="row.editing">
          <tiny-button size="mini" @click="row.editing = false"> 保存 </tiny-button>
          <tiny-button size="mini" @click="row.editing = false"> 取消 </tiny-button>
        </template>
        <template v-else>
          <tiny-button size="mini" @click="row.editing = true"> 编辑 </tiny-button>
        </template>
      </template>
    </tiny-grid-column>
  </tiny-grid>
</template>

<script>
import { Grid, GridColumn, Input, Select, Button } from '@opentiny/vue'

export default {
  components: {
    TinyGrid: Grid,
    TinyGridColumn: GridColumn,
    TinyButton: Button
  },
  methods: {
    renderInput(field) {
      return (h, { row }) =>
        row.editing
          ? h(Input, {
              props: { modelValue: row[field] },
              on: { 'update:modelValue': (value) => (row[field] = value) }
            })
          : h('span', row[field])
    },
    renderSelect(field) {
      return (h, { row }) =>
        row.editing
          ? h(Select, {
              props: { modelValue: row[field], options: this.options, textField: 'label', valueField: 'value' },
              on: { 'update:modelValue': (value) => (row[field] = value) }
            })
          : h('span', row[field])
    }
  },
  data() {
    return {
      options: [
        { label: '华北区', value: '华北区' },
        { label: '华东区', value: '华东区' },
        { label: '华南区', value: '华南区' }
      ],
      tableData: [
        {
          id: '1',
          name: 'GFD科技有限公司',
          area: '华东区',
          address: '福州',
          introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。',
          editing: true
        },
        {
          id: '2',
          name: 'WWWW科技有限公司',
          area: '华南区',
          address: '深圳福田区',
          introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。',
          editing: true
        },
        {
          id: '3',
          name: 'RFV有限责任公司',
          area: '华南区',
          address: '中山市',
          introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。',
          editing: false
        },
        {
          id: '4',
          name: 'TGB有限公司',
          area: '华北区',
          address: '梅州',
          introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。',
          editing: false
        },
        {
          id: '5',
          name: 'YHN科技有限公司',
          area: '华南区',
          address: '韶关',
          introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。',
          editing: false
        },
        {
          id: '6',
          name: '康康物业有限公司',
          area: '华北区',
          address: '广州天河区',
          introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。',
          editing: false
        }
      ]
    }
  }
}
</script>
