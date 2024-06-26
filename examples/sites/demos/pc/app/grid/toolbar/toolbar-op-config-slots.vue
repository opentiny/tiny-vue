<template>
  <tiny-grid ref="basicGrid" v-bind="op"></tiny-grid>
</template>

<script>
import { Grid, Pager, GridToolbar, Button } from '@opentiny/vue'
import { iconLanguage } from '@opentiny/vue-icon'

const introduction = '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
const datas = [
  { id: '1', name: 'GFD科技有限公司', area: '华东区', address: '福州', introduction },
  { id: '2', name: 'WWWW科技有限公司', area: '华南区', address: '深圳福田区', introduction },
  { id: '3', name: 'RFV有限责任公司', area: '华南区', address: '中山市', introduction },
  { id: '4', name: 'TGB有限公司', area: '华北区', address: '梅州', introduction },
  { id: '5', name: 'YHN科技有限公司', area: '华南区', address: '韶关', introduction },
  { id: '6', name: '康康物业有限公司', area: '华北区', address: '广州天河区', introduction },
  { id: '7', name: '深圳市福德宝有限公司', area: '华南区', address: '清远', introduction }
]

export default {
  components: {
    TinyGrid: Grid
  },
  data() {
    return {
      op: {
        seqSerial: true,
        editConfig: { trigger: 'click', mode: 'cell', showStatus: true },
        fetchData: {
          api: this.getData
        },
        toolbar: {
          component: GridToolbar,
          // 支持配置式使用buttons和tools插槽
          slots: {
            buttons(params, h) {
              return h('div', { class: 'buttons-wrapper' }, [h(Button, '配置式插槽')])
            },
            tools(params, h) {
              return h('div', { class: 'tools-pos' }, [[h(iconLanguage())]])
            }
          }
        },
        pager: {
          component: Pager,
          attrs: {
            currentPage: 1,
            pageSize: 3,
            pageSizes: [3, 5, 10],
            total: 0,
            layout: 'total, prev, pager, next, jumper, sizes'
          }
        },
        columns: [
          { type: 'selection', width: '50' },
          { type: 'index', width: '60' },
          { field: 'name', title: '名称', showOverflow: true, editor: { component: 'input', autoselect: true } },
          { field: 'area', title: '区域', editor: { component: 'input' } },
          { field: 'address', title: '地址', editor: { component: 'input' } },
          {
            field: 'introduction',
            title: '公司简介',
            showOverflow: true,
            editor: { component: 'input', autoselect: true }
          }
        ]
      }
    }
  },
  methods: {
    getData({ page }) {
      const curPage = page.currentPage
      const pageSize = page.pageSize
      const offset = (curPage - 1) * pageSize

      return new Promise((resolve) => {
        resolve({
          result: datas.slice(offset, offset + pageSize),
          page: { total: datas.length }
        })
      })
    }
  }
}
</script>
