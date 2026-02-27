<template>
  <tiny-grid :data="tableData">
    <tiny-grid-column type="index" width="60"></tiny-grid-column>
    <tiny-grid-column field="name" title="名称" :filter="customFilter">
      <template #filter="data">
        <ul class="tiny-grid__filter-panel custom-filter-panel">
          <li class="filter-option__input">
            <tiny-input
              v-model="customFilterData.input"
              placeholder="输入名称关键词筛选"
              clearable
              size="small"
            />
          </li>
          <li class="tiny-grid__filter-option filter-option__btns">
            <tiny-button type="primary" size="small" @click="data.context.commitFilter(customFilter)">
              确定
            </tiny-button>
            <tiny-button size="small" @click="handleReset(data.context)">重置</tiny-button>
            <tiny-button size="small" @click="handleClear(data.context)">清除全部</tiny-button>
          </li>
        </ul>
      </template>
    </tiny-grid-column>
    <tiny-grid-column field="area" title="区域"></tiny-grid-column>
    <tiny-grid-column field="address" title="地址"></tiny-grid-column>
    <tiny-grid-column field="introduction" title="公司简介"></tiny-grid-column>
  </tiny-grid>
</template>

<script lang="jsx">
import { TinyGrid, TinyGridColumn, TinyInput, TinyButton } from '@opentiny/vue'

export default {
  components: {
    TinyGrid,
    TinyGridColumn,
    TinyInput,
    TinyButton
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
          name: 'WWW 科技 YX 公司',
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
          name: 'TGB 科技 YX 公司',
          area: '华东区',
          address: '龙岩',
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
          name: 'WSX 科技 YX 公司',
          area: '华中区',
          address: '黄冈',
          introduction: '公司技术和研发实力雄厚，是国家 863 项目的参与者，并被政府认定为“高新技术企业”。'
        }
      ],
      customFilterData: {
        input: ''
      },
      customFilter: { method: this.customFilterMethod }
    }
  },
  methods: {
    customFilterMethod({ row }) {
      return row.name.includes(this.customFilterData.input)
    },
    handleReset(context) {
      this.customFilterData.input = ''
      context.resetFilter()
    },
    handleClear(context) {
      this.customFilterData.input = ''
      context.clearFilter()
    }
  }
}
</script>

<style scoped>
.custom-filter-panel {
  padding: 12px 16px;
  min-width: 260px;
}
.custom-filter-panel .filter-option__input {
  margin-bottom: 12px;
}
.custom-filter-panel .filter-option__input :deep(.tiny-input) {
  width: 100%;
}
.custom-filter-panel .filter-option__btns {
  display: flex;
  gap: 8px;
  justify-content: flex-end;
}
</style>
