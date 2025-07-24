<template>
  <tiny-grid :data="tableData" resizable :edit-config="{ trigger: 'click', mode: 'cell', showStatus: true }">
    <tiny-grid-column header-align="center">
      <template #header>操作</template>
      <tiny-grid-column type="index" width="40"></tiny-grid-column>
      <tiny-grid-column type="selection" width="48"></tiny-grid-column>
    </tiny-grid-column>
    <tiny-grid-column header-align="center">
      <template #header>
        <div class="custom-header">
          <icon-administrator></icon-administrator>
          <span style="margin-left: 4px">Description</span>
        </div>
      </template>
      <tiny-grid-column field="name" title="名称" show-tip sortable></tiny-grid-column>
      <tiny-grid-column field="area" :editor="{ component: 'select', options }" sortable>
        <template #header>
          <div class="custom-header">
            <icon-mark-on></icon-mark-on>
            <span style="margin-left: 4px">Description</span>
          </div>
        </template>
      </tiny-grid-column>
    </tiny-grid-column>
    <tiny-grid-column header-align="center">
      <template #header>
        <icon-versiontree></icon-versiontree>
      </template>
      <tiny-grid-column field="address" title="地址" :editor="{ component: 'input', autoselect: true }" sortable>
      </tiny-grid-column>
      <tiny-grid-column
        field="introduction"
        title="公司简介"
        :editor="{ component: 'input', autoselect: true }"
        sortable
        show-overflow="title"
      ></tiny-grid-column>
    </tiny-grid-column>
  </tiny-grid>
</template>

<script lang="jsx">
import { TinyGrid, TinyGridColumn } from '@opentiny/vue'
import { IconAdministrator, IconVersiontree, IconMarkOn } from '@opentiny/vue-icon'

export default {
  components: {
    TinyGrid,
    TinyGridColumn,
    IconVersiontree: IconVersiontree(),
    IconAdministrator: IconAdministrator(),
    IconMarkOn: IconMarkOn()
  },
  data() {
    return {
      tableData: [
        {
          id: '1',
          name: 'GFD 科技 YX 公司',
          area: '华东区',
          address: '福州',
          introduction: '公司技术和研发实力雄厚，是国家 863 项目的参与者，并被政府认定为“高新技术企业”。'
        },
        {
          id: '2',
          name: 'WWWW 科技 YX 公司',
          area: '华南区',
          address: '深圳福田区',
          introduction: '公司技术和研发实力雄厚，是国家 863 项目的参与者，并被政府认定为“高新技术企业”。'
        },
        {
          id: '3',
          name: 'RFV 有限责任公司',
          area: '华南区',
          address: '中山市',
          introduction: '公司技术和研发实力雄厚，是国家 863 项目的参与者，并被政府认定为“高新技术企业”。'
        },
        {
          id: '4',
          name: 'TGBYX 公司',
          area: '华北区',
          address: '梅州',
          introduction: '公司技术和研发实力雄厚，是国家 863 项目的参与者，并被政府认定为“高新技术企业”。'
        },
        {
          id: '5',
          name: 'YHN 科技 YX 公司',
          area: '华南区',
          address: '韶关',
          introduction: '公司技术和研发实力雄厚，是国家 863 项目的参与者，并被政府认定为“高新技术企业”。'
        },
        {
          id: '6',
          name: '康康物业 YX 公司',
          area: '华北区',
          address: '广州天河区',
          introduction: '公司技术和研发实力雄厚，是国家 863 项目的参与者，并被政府认定为“高新技术企业”。'
        }
      ],
      options: [
        { label: '华北区', value: '华北区' },
        { label: '华东区', value: '华东区' },
        { label: '华南区', value: '华南区' }
      ]
    }
  }
}
</script>

<style scoped>
.custom-header {
  display: flex;
  align-items: center;
}
</style>
