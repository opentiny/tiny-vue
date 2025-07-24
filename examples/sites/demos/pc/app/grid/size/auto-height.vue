<template>
  <div>
    <div style="padding: 10px">
      <tiny-button @click="setHeight(200)">修改 200px</tiny-button>
      <tiny-button @click="setHeight(400)">修改 400px</tiny-button>
      <tiny-button @click="setHeight(600)">修改 600px</tiny-button>
    </div>

    <div :style="height">
      <tiny-grid height="auto" auto-resize :fetch-data="fetchData" seq-serial :pager="pagerConfig">
        <tiny-grid-column type="index" width="60"></tiny-grid-column>
        <tiny-grid-column field="name" title="名称"></tiny-grid-column>
        <tiny-grid-column field="area" title="所属区域"></tiny-grid-column>
        <tiny-grid-column field="address" title="地址"></tiny-grid-column>
        <tiny-grid-column field="introduction" title="公司简介" show-overflow></tiny-grid-column>
      </tiny-grid>
    </div>
  </div>
</template>

<script lang="jsx">
import { TinyGrid, TinyGridColumn, TinyPager, TinyButton } from '@opentiny/vue'

export default {
  components: {
    TinyGrid,
    TinyGridColumn,
    TinyButton
  },
  data() {
    return {
      height: {},
      pagerConfig: {
        component: TinyPager,
        attrs: {
          currentPage: 1,
          pageSize: 10,
          pageSizes: [5, 10],
          total: 0,
          layout: 'total, sizes, prev, pager, next, jumper'
        }
      },
      fetchData: {
        api: this.getData
      },
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
        },
        {
          id: '7',
          name: '深圳市福德宝网络技术 YX 公司',
          area: '华南区',
          address: '清远',
          introduction: '公司技术和研发实力雄厚，是国家 863 项目的参与者，并被政府认定为“高新技术企业”。'
        },
        {
          id: '8',
          name: '西安门福德宝网络技术 YX 公司',
          area: '华东区',
          address: '厦门',
          introduction: '公司技术和研发实力雄厚，是国家 863 项目的参与者，并被政府认定为“高新技术企业”。'
        },
        {
          id: '9',
          name: 'WWWW 科技股份有限子公司',
          area: '华南区',
          address: '韶关',
          introduction: '公司技术和研发实力雄厚，是国家 863 项目的参与者，并被政府认定为“高新技术企业”。'
        },
        {
          id: '10',
          name: 'WSX 科技 YX 公司',
          area: '华南区',
          address: '广州',
          introduction: '公司技术和研发实力雄厚，是国家 863 项目的参与者，并被政府认定为“高新技术企业”。'
        }
      ]
    }
  },
  methods: {
    getData({ page }) {
      let curPage = page.currentPage
      let pageSize = page.pageSize
      let offset = (curPage - 1) * pageSize

      return new Promise((resolve) => {
        resolve({
          result: this.tableData.slice(offset, offset + pageSize),
          page: { total: this.tableData.length }
        })
      })
    },
    setHeight(height) {
      this.height = { height: height + 'px' }
    }
  }
}
</script>
