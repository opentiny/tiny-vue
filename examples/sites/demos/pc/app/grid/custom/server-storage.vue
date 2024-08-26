<template>
  <div>
    <tiny-grid ref="tinyGrid" :fetch-data="fetchData" :pager="pager">
      <template #toolbar>
        <tiny-grid-toolbar
          ref="tinyGridToolbar"
          id="custom-remoteservice"
          @remote-setting="handleRemoteSetting"
          :setting="{ remote: true, storage: 'remote', sortType: 'all' }"
        ></tiny-grid-toolbar>
      </template>
      <tiny-grid-column type="index" width="60"></tiny-grid-column>
      <tiny-grid-column field="name" title="名称" sortable></tiny-grid-column>
      <tiny-grid-column field="area" title="所属区域" sortable></tiny-grid-column>
      <tiny-grid-column field="address" title="地址"></tiny-grid-column>
      <tiny-grid-column field="introduction" title="公司简介" show-overflow></tiny-grid-column>
    </tiny-grid>
  </div>
</template>

<script lang="jsx">
import { Grid, GridColumn, Pager, GridToolbar } from '@opentiny/vue'

export default {
  components: {
    TinyGrid: Grid,
    TinyGridColumn: GridColumn,
    TinyGridToolbar: GridToolbar
  },
  data() {
    return {
      pager: {
        component: Pager,
        attrs: {
          currentPage: 1,
          pageSize: 3,
          total: 0,
          pageSizes: [3, 5, 10, 20],
          layout: 'total, sizes, prev, pager, next, jumper'
        }
      },
      fetchData: {
        api: this.getData
      },
      customConfigs: [],
      tableData: [
        {
          id: '1',
          name: 'GFD科技YX公司',
          area: '华东区',
          address: '福州',
          introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
        },
        {
          id: '2',
          name: 'WWWW科技YX公司',
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
          name: 'TGBYX公司',
          area: '华北区',
          address: '梅州',
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
          name: '康康物业YX公司',
          area: '华北区',
          address: '广州天河区',
          introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
        },
        {
          id: '7',
          name: '深圳市福德宝网络技术YX公司',
          area: '华南区',
          address: '清远',
          introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
        },
        {
          id: '8',
          name: '西安门福德宝网络技术YX公司',
          area: '华东区',
          address: '厦门',
          introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
        },
        {
          id: '9',
          name: 'WWWW科技股份有限子公司',
          area: '华南区',
          address: '韶关',
          introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
        },
        {
          id: '10',
          name: 'WSX科技YX公司',
          area: '华南区',
          address: '广州',
          introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
        }
      ]
    }
  },
  created() {
    this.getCustomConfigs()
  },
  methods: {
    handleRemoteSetting(settings) {
      this.$refs.tinyGrid.reloadCustoms(settings)
    },
    getCustomConfigs() {
      setTimeout(() => {
        // 模拟接口请求回来的数据
        this.loading = false

        const configs = this.$refs.tinyGrid.getColumns()

        // 字段 introduction 在字段 address 前面
        const result = [
          { order: null, property: 'introduction', visible: true },
          { order: null, property: 'address', visible: true }
        ]

        result.forEach((item) => {
          configs.forEach((config) => {
            if (item.property === config.property) {
              Object.assign(config, item)
            }
          })
        })

        // 如果字段 introduction 不在字段 address 前面，就调整 introduction 到 address 前面
        const introIndex = configs.findIndex((col) => col.property === 'introduction')
        const addressIndex = configs.findIndex((col) => col.property === 'address')

        if (introIndex > -1 && addressIndex > -1 && introIndex > addressIndex) {
          configs.splice(addressIndex, 0, ...configs.splice(introIndex, 1))
        }

        // 更新个性化面板数据
        this.$refs.tinyGridToolbar.updateColumn(configs)

        // 更新表格列，第二个参数为 true 表示同时调整列顺序
        this.$refs.tinyGrid.reloadCustoms(configs, true)
      }, 0)
    },
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
    }
  }
}
</script>
