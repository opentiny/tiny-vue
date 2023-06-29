<template>
  <tiny-grid
    :data="tableData"
    :expand-config="{ trigger: 'row', activeMethod: activeExpand, showIcon: false }"
    :tree-config="{ trigger: 'row', children: 'children', hideMethod: hideTree }"
    :resizable="false"
  >
    <tiny-grid-column type="index" width="60"></tiny-grid-column>
    <tiny-grid-column type="expand" width="0">
      <template #default="{ row }">
        <ul>
          <li>
            <span>公司名称：</span><span>{{ row.name }}</span>
          </li>
          <li>
            <span>区域：</span><span>{{ row.area }}</span>
          </li>
          <li>
            <span>员工数：</span><span>{{ row.employees }}</span>
          </li>
          <li>
            <span>公司简介：</span><span>{{ row.introduction }}</span>
          </li>
        </ul>
      </template>
    </tiny-grid-column>
    <tiny-grid-column field="name" title="公司名称" tree-node></tiny-grid-column>
    <tiny-grid-column field="area" title="区域"></tiny-grid-column>
    <tiny-grid-column field="employees" title="员工数"></tiny-grid-column>
  </tiny-grid>
</template>

<script>
import { Grid, GridColumn } from '@opentiny/vue'

export default {
  components: {
    TinyGrid: Grid,
    TinyGridColumn: GridColumn
  },
  mounted() {},
  data() {
    return {
      tableData: [
        {
          id: '1',
          pid: '0',
          name: 'GFD科技有限公司',
          area: '华东区',
          employees: '800',
          introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。',
          children: [
            {
              id: '15',
              pid: '1',
              name: 'GFD科技股份有限子公司',
              area: '华东区',
              employees: '700',
              introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。',
              children: [{}]
            }
          ]
        },
        {
          id: '2',
          pid: '0',
          name: 'WWWW科技有限公司',
          area: '华南区',
          employees: '500',
          introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。',
          children: [
            {
              id: '22',
              pid: '2',
              name: 'WWWW科技股份有限子公司',
              area: '华南区',
              employees: '720',
              introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。',
              children: [{}]
            }
          ]
        }
      ]
    }
  },
  methods: {
    // 可以使用数据行row和行级别rowLevel控制是否渲染展开行
    activeExpand(row, rowLevel) {
      // 行级别为1的行才渲染展开行
      return rowLevel === 1
    },
    // 可以使用数据行row和行级别rowLevel控制是否渲染树表行
    hideTree(row, rowLevel) {
      // 行级别为2的行不渲染
      return rowLevel === 2
    }
  }
}
</script>
