<template>
  <div>
    <div class="tiny-demo-flex">
      <div class="tiny-demo-label">前端过滤示例</div>
      <tiny-button @click="relaodData">Relaod 数据前端</tiny-button>
    </div>
    <tiny-grid ref="gridFilter" :fetch-data="fetchData" :pager="pagerConfig">
      <tiny-grid-column type="index" width="60"></tiny-grid-column>
      <tiny-grid-column field="name" title="名称" :filter="nameFilter"></tiny-grid-column>
      <tiny-grid-column field="area" title="所属区域"></tiny-grid-column>
      <tiny-grid-column field="address" title="地址"></tiny-grid-column>
      <tiny-grid-column field="introduction" title="公司简介" show-overflow></tiny-grid-column>
    </tiny-grid>
    <br />
    <br />
    <div class="tiny-demo-flex">
      <div class="tiny-demo-label">后端过滤示例</div>
      <tiny-button @click="relaodRemoteData">Relaod 数据后端</tiny-button>
    </div>
    <tiny-grid ref="gridRemoteFilter" :fetch-data="fetchData" :pager="pagerConfig" remote-filter>
      <tiny-grid-column type="index" width="60"></tiny-grid-column>
      <tiny-grid-column field="name" title="名称" :filter="nameFilter"></tiny-grid-column>
      <tiny-grid-column field="area" title="所属区域"></tiny-grid-column>
      <tiny-grid-column field="address" title="地址"></tiny-grid-column>
      <tiny-grid-column field="introduction" title="公司简介" show-overflow></tiny-grid-column>
    </tiny-grid>
  </div>
</template>

<script>
import { TinyGrid, TinyGridColumn, TinyPager, TinyButton } from '@opentiny/vue'

const tableData = [
  {
    id: '1',
    name: 'GFD 科技有限公司',
    area: '华东区',
    address: '福州',
    introduction: '公司技术和研发实力雄厚，是国家 863 项目的参与者，并被政府认定为“高新技术企业”。'
  },
  {
    id: '2',
    name: 'WWWW 科技有限公司',
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
    name: 'TGB 有限公司',
    area: '华北区',
    address: '梅州',
    introduction: '公司技术和研发实力雄厚，是国家 863 项目的参与者，并被政府认定为“高新技术企业”。'
  },
  {
    id: '5',
    name: 'YHN 科技有限公司',
    area: '华南区',
    address: '韶关',
    introduction: '公司技术和研发实力雄厚，是国家 863 项目的参与者，并被政府认定为“高新技术企业”。'
  },
  {
    id: '6',
    name: 'KANG 物业有限公司',
    area: '华北区',
    address: '广州天河区',
    introduction: '公司技术和研发实力雄厚，是国家 863 项目的参与者，并被政府认定为“高新技术企业”。'
  }
]

export default {
  components: {
    TinyGrid,
    TinyGridColumn,
    TinyButton
  },
  data() {
    return {
      nameFilter: {
        inputFilter: { relation: 'contains' },
        enumable: false,
        defaultFilter: true
      },
      pagerConfig: {
        component: TinyPager,
        attrs: {
          currentPage: 1,
          pageSize: 5,
          pageSizes: [5, 10]
        }
      },
      fetchData: {
        api: this.getData,
        // 重新加载数据配置
        reloadConfig: {
          // 在重新加载数据时，保持表格过滤
          filter: true
        }
      }
    }
  },
  methods: {
    getData({ page, filters }) {
      console.log('filters', filters)
      let currentPage = page.currentPage
      let pageSize = page.pageSize
      let offset = (currentPage - 1) * pageSize

      return new Promise((resolve) => {
        setTimeout(() => {
          let total = tableData.length
          let result = tableData.slice(offset, offset + pageSize)

          resolve({ result, page: { total } })
        }, 500)
      })
    },
    relaodData() {
      this.$refs.gridFilter.handleFetch('reload')
    },
    relaodRemoteData() {
      this.$refs.gridRemoteFilter.handleFetch('reload')
    }
  }
}
</script>

<style scoped>
.tiny-demo-flex {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 10px;
}
.tiny-demo-label {
  margin-right: 16px;
}
</style>
