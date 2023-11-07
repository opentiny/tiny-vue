<template>
  <tiny-grid
    :data="tableData"
    :tree-config="{ children: 'children' }"
    :optimization="{
      scrollX: { gt: 15, rSize: 14, vSize: 10, adaptive: false },
      scrollY: { gt: 15, rSize: 20, adaptive: false }
    }"
    :height="500"
    :column-min-width="180"
    :edit-config="{ trigger: 'click', mode: 'cell', showStatus: true }"
  >
    <tiny-grid-column type="index" width="60" :index-method="indexMethod" fixed="left"></tiny-grid-column>
    <tiny-grid-column type="selection" width="60" fixed="left"></tiny-grid-column>
    <tiny-grid-column field="irId" title="编号" fixed="left"></tiny-grid-column>
    <tiny-grid-column field="irTitle" title="标题" tree-node fixed="left"></tiny-grid-column>
    <tiny-grid-column field="team" title="团队">
      <template #header="{ column }">{{ column.title }}</template>
      <template #default="{ row, column }">{{ row[column.property] }}</template>
    </tiny-grid-column>
    <tiny-grid-column field="pi" title="PI">
      <template #header="{ column }">{{ column.title }}</template>
      <template #default="{ row, column }">{{ row[column.property] }}</template>
    </tiny-grid-column>
    <tiny-grid-column field="rollup" title="卷积工作量">
      <template #header="{ column }">{{ column.title }}</template>
      <template #default="{ row, column }">{{ row[column.property] }}</template>
    </tiny-grid-column>
    <tiny-grid-column field="progress" title="进展">
      <template #header="{ column }">{{ column.title }}</template>
      <template #default="{ row, column }">{{ row[column.property] }}</template>
    </tiny-grid-column>
    <tiny-grid-column field="prior" title="优先级">
      <template #header="{ column }">{{ column.title }}</template>
      <template #default="{ row, column }">{{ row[column.property] }}</template>
    </tiny-grid-column>
    <tiny-grid-column field="microServ" title="微服务">
      <template #header="{ column }">{{ column.title }}</template>
      <template #default="{ row, column }">{{ row[column.property] }}</template>
    </tiny-grid-column>
    <tiny-grid-column field="iterate" title="迭代"></tiny-grid-column>
    <tiny-grid-column field="healthStatus" title="健康状态"></tiny-grid-column>
    <tiny-grid-column
      field="planDevEndTime"
      title="计划开发结束时间"
      :editor="{ component: DatePicker, attrs: { format: 'yyyy-MM-dd', valueFormat: 'yyyy-MM-dd' } }"
    ></tiny-grid-column>
    <tiny-grid-column
      field="planTestEndTime"
      title="计划测试结束时间"
      :editor="{ component: DatePicker, attrs: { format: 'yyyy-MM-dd', valueFormat: 'yyyy-MM-dd' } }"
    ></tiny-grid-column>
    <tiny-grid-column
      field="customerExpect"
      title="用户期望交付时间"
      :editor="{ component: DatePicker, attrs: { format: 'yyyy-MM-dd', valueFormat: 'yyyy-MM-dd' } }"
    ></tiny-grid-column>
    <tiny-grid-column field="requireSource" title="需求来源">
      <template #header="{ column }">{{ column.title }}</template>
      <template #default="{ row, column }">{{ row[column.property] }}</template>
    </tiny-grid-column>
    <tiny-grid-column field="isRequireDev" title="是否需要开发">
      <template #header="{ column }">{{ column.title }}</template>
      <template #default="{ row, column }">{{ row[column.property] }}</template>
    </tiny-grid-column>
    <tiny-grid-column field="isRequireDec" title="是否需要分解">
      <template #header="{ column }">{{ column.title }}</template>
      <template #default="{ row, column }">{{ row[column.property] }}</template>
    </tiny-grid-column>
    <tiny-grid-column field="requireType" title="需求类型">
      <template #header="{ column }">{{ column.title }}</template>
      <template #default="{ row, column }">{{ row[column.property] }}</template>
    </tiny-grid-column>
    <tiny-grid-column field="requireSubcat" title="需求子类">
      <template #header="{ column }">{{ column.title }}</template>
      <template #default="{ row, column }">{{ row[column.property] }}</template>
    </tiny-grid-column>
    <tiny-grid-column field="budgetAuth" title="预算是否授予">
      <template #header="{ column }">{{ column.title }}</template>
      <template #default="{ row, column }">{{ row[column.property] }}</template>
    </tiny-grid-column>
    <tiny-grid-column field="userStoryCat" title="用户故事类别">
      <template #header="{ column }">{{ column.title }}</template>
      <template #default="{ row, column }">{{ row[column.property] }}</template>
    </tiny-grid-column>
    <tiny-grid-column field="product" title="产品">
      <template #header="{ column }">{{ column.title }}</template>
      <template #default="{ row, column }">{{ row[column.property] }}</template>
    </tiny-grid-column>
    <tiny-grid-column field="subProd" title="子产品">
      <template #header="{ column }">{{ column.title }}</template>
      <template #default="{ row, column }">{{ row[column.property] }}</template>
    </tiny-grid-column>
    <tiny-grid-column field="module" title="模块">
      <template #header="{ column }">{{ column.title }}</template>
      <template #default="{ row, column }">{{ row[column.property] }}</template>
    </tiny-grid-column>
    <tiny-grid-column field="appid" title="所属APPID">
      <template #header="{ column }">{{ column.title }}</template>
      <template #default="{ row, column }">{{ row[column.property] }}</template>
    </tiny-grid-column>
    <tiny-grid-column field="requireSource" title="需求来源2"></tiny-grid-column>
    <tiny-grid-column field="isRequireDev" title="是否需要开发2"></tiny-grid-column>
    <tiny-grid-column field="isRequireDec" title="是否需要分解2"></tiny-grid-column>
    <tiny-grid-column field="requireType" title="需求类型2"></tiny-grid-column>
    <tiny-grid-column field="requireSubcat" title="需求子类2"></tiny-grid-column>
    <tiny-grid-column field="budgetAuth" title="预算是否授予2"></tiny-grid-column>
    <tiny-grid-column field="userStoryCat" title="用户故事类别2"></tiny-grid-column>
    <tiny-grid-column field="product" title="产品2"></tiny-grid-column>
    <tiny-grid-column field="subProd" title="子产品2"></tiny-grid-column>
    <tiny-grid-column field="module" title="模块2"></tiny-grid-column>
    <tiny-grid-column field="appid" title="所属APPID2"></tiny-grid-column>
    <tiny-grid-column field="requireSource" title="需求来源3"></tiny-grid-column>
    <tiny-grid-column field="isRequireDev" title="是否需要开发3"></tiny-grid-column>
    <tiny-grid-column field="isRequireDec" title="是否需要分解3"></tiny-grid-column>
    <tiny-grid-column field="requireType" title="需求类型3"></tiny-grid-column>
    <tiny-grid-column field="requireSubcat" title="需求子类3"></tiny-grid-column>
    <tiny-grid-column field="budgetAuth" title="预算是否授予3"></tiny-grid-column>
    <tiny-grid-column field="userStoryCat" title="用户故事类别3"></tiny-grid-column>
    <tiny-grid-column field="product" title="产品3"></tiny-grid-column>
    <tiny-grid-column field="subProd" title="子产品3"></tiny-grid-column>
    <tiny-grid-column field="module" title="模块3"></tiny-grid-column>
    <tiny-grid-column field="appid" title="所属APPID3"></tiny-grid-column>
  </tiny-grid>
</template>

<script lang="jsx">
import { Grid, GridColumn, DatePicker } from '@opentiny/vue'

const template = {
  id: '0',
  irId: 'IR0',
  irTitle: 'IR-0',
  team: 'kweuat110',
  pi: '八月版本',
  rollup: '3人天',
  progress: '初始',
  prior: '中',
  microServ: 'MS012601',
  designowner: '',
  iterate: '八月版本迭代一',
  requireProposer: '435259704104388',
  healthStatus: '正常',
  devowner: '',
  testowner: '',
  currentowner: '',
  planDevEndTime: '2022-08-27',
  planTestEndTime: '2022-08-27',
  customerExpect: '2022-08-27',
  requireSource: 'IT devops',
  isRequireDev: '是',
  isRequireDec: '是',
  requireType: '性能需求',
  requireSubcat: '优化项',
  budgetAuth: '未授予',
  userStoryCat: '临时需求',
  product: 'IT devops',
  subProd: 'IT devops',
  module: 'IT devops',
  creator: '435259704104388',
  appid: 'com.hw.his.Tiny.card',
  children: []
}

const count = 120

const buildArr = ({ type, start, idStart }) =>
  Array.from({ length: count }).map((item, i) => {
    const row = JSON.parse(JSON.stringify(template))

    row.id = `${idStart + i}`
    row.irId = `${type}${start}`
    row.irTitle = `${type}-${idStart + i}`

    return row
  })

const buildDatas = () => {
  const datas = buildArr({ type: 'IR', start: 20220812243395, idStart: 1 })

  datas[0].irTitle += `-${count}个子US`
  datas[0].children = buildArr({ type: 'US', start: 20220712243395, idStart: count + 1 })

  datas[1].irTitle += `-${count}个子US`
  datas[1].children = buildArr({ type: 'US', start: 20220612243395, idStart: count * 2 + 1 })

  datas[2].irTitle += `-${count}个子US`
  datas[2].children = buildArr({ type: 'US', start: 20220512243395, idStart: count * 3 + 1 })

  datas[0].children[0].irTitle += `-${count}个子TASK`
  datas[0].children[0].children = buildArr({ type: 'TK', start: 20220412243395, idStart: count * 4 + 1 })

  return datas
}

export default {
  components: {
    TinyGrid: Grid,
    TinyGridColumn: GridColumn
  },
  data() {
    return {
      DatePicker,
      tableData: buildDatas()
    }
  },
  methods: {
    r(h, { row }) {
      return <div>{row.name}</div>
    },
    indexMethod({ row }) {
      return row.id
    }
  }
}
</script>
