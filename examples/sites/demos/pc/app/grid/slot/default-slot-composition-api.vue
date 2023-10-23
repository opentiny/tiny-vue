<template>
  <tiny-grid :data="tableData">
    <tiny-grid-column type="index" title="序号" width="100"></tiny-grid-column>
    <tiny-grid-column field="name" title="名称">
      <template #default="data">
        <tiny-tooltip class="item" effect="dark" :content="data.row.name" placement="top-start">
          <span style="color: pink">{{ data.row.name }}</span>
        </tiny-tooltip>
      </template>
    </tiny-grid-column>
    <tiny-grid-column field="area" title="区域"></tiny-grid-column>
    <tiny-grid-column field="address" title="地址"></tiny-grid-column>
    <tiny-grid-column field="introduction" show-overflow title="公司简介"></tiny-grid-column>
  </tiny-grid>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Grid as TinyGrid, GridColumn as TinyGridColumn, Tooltip as TinyTooltip } from '@opentiny/vue'

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
    name: 'WWW科技YX公司',
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
    name: 'TGB科技YX公司',
    area: '华东区',
    address: '龙岩',
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
    name: 'WSX科技YX公司',
    area: '华中区',
    address: '黄冈',
    introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
  }
])
</script>

<style scoped>
.tiny-grid-hidden-column {
  display: block;
}
</style>
