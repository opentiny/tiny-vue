<template>
  <div>
    <tiny-grid ref="selfTable" :expand-config="expandConfigData" :data="tableData">
      <tiny-grid-column type="index" width="60"></tiny-grid-column>
      <tiny-grid-column type="expand" width="60">
        <template #default="data">
          <ul>
            <li>
              <span>公司名称：</span>
              <span>{{ data.row.name }}</span>
            </li>
            <li>
              <span>区域：</span>
              <span>{{ data.row.area }}</span>
            </li>
            <li>
              <span>员工数：</span>
              <span>{{ data.row.employees }}</span>
            </li>
            <li>
              <span>公司简介：</span>
              <span>{{ data.row.introduction }}</span>
            </li>
          </ul>
        </template>
      </tiny-grid-column>
      <tiny-grid-column field="name" title="公司名称"></tiny-grid-column>
      <tiny-grid-column field="area" title="区域"></tiny-grid-column>
      <tiny-grid-column field="employees" title="员工数"></tiny-grid-column>
    </tiny-grid>
  </div>
</template>

<script>
import { Grid, GridColumn } from '@opentiny/vue'

export default {
  components: {
    TinyGrid: Grid,
    TinyGridColumn: GridColumn
  },
  mounted() {
    let allData = this.$refs.selfTable.getData()

    allData.forEach((item, index) => {
      if (index % 2 === 0) {
        this.expandConfigData.expandRowKeys.push(item._RID) // 添加默认展开指定行
      }
    })
  },
  data() {
    return {
      expandConfigData: {
        expandAll: false, // 默认展开所有行
        trigger: 'row', // 触发方式 default（点击按钮触发）,cell（点击单元格触发）,row（点击行触发）
        expandRowKeys: [], // 默认展开指定行（需要有 row-id）
        accordion: false, // 对于同一级的节点，每次只能展开一个
        activeMethod(row) {
          // 控制是否渲染展开行
          return row.id !== '4'
        },
        showIcon: true // 配置是否显示展开图标
      },
      tableData: [
        {
          id: '1',
          name: 'GFD科技YX公司',
          area: '华东区',
          employees: '800',
          introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
        },
        {
          id: '2',
          name: 'WWWW科技YX公司',
          area: '华南区',
          employees: '500',
          introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
        },
        {
          id: '3',
          name: 'TGBYX公司',
          area: '华南区',
          employees: '360',
          introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
        },
        {
          id: '4',
          name: '康康物业YX公司',
          area: '华南区',
          employees: '400',
          introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
        }
      ]
    }
  }
}
</script>
