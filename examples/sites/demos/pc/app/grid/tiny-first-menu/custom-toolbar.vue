<template>
  <div>
    <tiny-grid
      :fetch-data="fetchData"
      seq-serial
      ref="basicGrid"
      :edit-config="{ trigger: 'click', mode: 'cell', showStatus: true }"
      :pager="pagerConfig"
    >
      <template #toolbar>
        <tiny-grid-toolbar>
          <template #buttons>
            <div style="width: 400px">
              <tiny-input style="width: 200px" v-model="text" placeholder="请输入公司名称"></tiny-input>
              <tiny-button @click="search">搜索</tiny-button>
            </div>
          </template>
        </tiny-grid-toolbar>
      </template>
      <tiny-grid-column type="selection" width="50"></tiny-grid-column>
      <tiny-grid-column type="index" width="60"></tiny-grid-column>
      <tiny-grid-column
        field="name"
        show-overflow
        title="名称"
        :editor="{ component: 'input', autoselect: true }"
      ></tiny-grid-column>
      <tiny-grid-column
        field="area"
        title="区域"
        sortable
        :editor="{ component: 'select', options }"
      ></tiny-grid-column>
      <tiny-grid-column field="address" title="地址" :editor="{ component: 'input', attrs: {} }"></tiny-grid-column>
      <tiny-grid-column field="introduction" show-overflow title="公司简介"></tiny-grid-column>
    </tiny-grid>
  </div>
</template>

<script lang="jsx">
import { Pager, Input, Button, Grid, GridColumn, GridToolbar } from '@opentiny/vue'

export default {
  components: {
    TinyInput: Input,
    TinyButton: Button,
    TinyGrid: Grid,
    TinyGridColumn: GridColumn,
    TinyGridToolbar: GridToolbar
  },
  data() {
    return {
      pagerConfig: {
        component: Pager,
        attrs: {
          currentPage: 1,
          pageSize: 10,
          total: 0,
          layout: 'total, prev, pager, next, jumper, sizes'
        }
      },
      options: [
        { label: '华中区', value: '华中区' },
        { label: '华东区', value: '华东区' },
        { label: '华南区', value: '华南区' },
        { label: '西南区', value: '西南区' }
      ],
      text: '',
      fetchData: {
        api: this.getData
      },
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
  methods: {
    getData({ page }) {
      let curPage = page.currentPage
      let pageSize = page.pageSize
      let offset = (curPage - 1) * pageSize

      return new Promise((resolve) => {
        resolve({
          result: this.tableData.slice(offset, offset + pageSize).filter((row) => row.name.includes(this.text)),
          page: { total: this.tableData.length }
        })
      })
    },
    search() {
      this.$refs.basicGrid.handleFetch()
    }
  }
}
</script>
