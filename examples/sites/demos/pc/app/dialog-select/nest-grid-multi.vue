<template>
  <div class="tiny-demo">
    <tiny-button @click="multi = !multi">{{ `切换为${multi ? '单选' : '多选'}` }}</tiny-button>
    <tiny-button @click="visible = !visible">{{ `${visible ? '关闭' : '打开'}窗口` }}</tiny-button>
    <tiny-dialog-select
      ref="dialogSelect"
      class="tiny-demo-dialog-select"
      :visible="visible"
      @update:visible="visible = $event"
      popseletor="grid"
      :multi="multi"
      :dialog-op="dialogOp"
      :grid-op="gridOp"
      :pager-op="pagerOp"
      :selected-box-op="selectedBoxOp"
      :remote-search="remoteSearch"
      :lookup-method="lookupMethod"
      :before-close="beforeClose"
      @size-change="onSizeChange"
      @current-change="onCurrentChange"
      @change="onDialogSelectChange"
      value-field="id"
      text-field="name"
      :main-height="290"
    >
      <template #search>
        <div class="tiny-demo-search">
          <div class="tiny-demo-search-left">
            <tiny-search placeholder="公司名称" is-enter-search @search="onSearch"></tiny-search>
          </div>
          <div class="tiny-demo-search-right">
            <tiny-select v-model="searchData.city" placeholder="选择城市" :options="options" clearable></tiny-select>
          </div>
        </div>
      </template>
    </tiny-dialog-select>
  </div>
</template>

<script>
import { DialogSelect, Button, Search, Select, Modal } from '@opentiny/vue'
import Sortable from 'sortablejs'

// 模拟服务侧数据
const datas = [
  { id: '1', name: 'GFD科技有限公司', city: '福州', province: '福建' },
  { id: '2', name: 'WWW科技有限公司', city: '深圳', province: '广东' },
  { id: '3', name: 'RFV有限责任公司', city: '中山', province: '广东' },
  { id: '4', name: 'TGB科技有限公司', city: '龙岩', province: '福建' },
  { id: '5', name: 'YHN科技有限公司', city: '韶关', province: '广东' },
  { id: '6', name: 'WSX科技有限公司', city: '黄冈', province: '湖北' },
  { id: '7', name: 'KBG物业有限公司', city: '赤壁', province: '湖北' },
  { id: '8', name: '深圳市福德宝网络技术有限公司', city: '深圳', province: '广东' },
  { id: '9', name: 'KBG物业有限公司', city: '赤壁', province: '湖北' },
  { id: '10', name: '深圳市福德宝网络技术有限公司', city: '深圳', province: '广东' }
]

// 接口1：根据一组数据id查询这组数据
const queryRowsByIds = (ids) => datas.filter((row) => ~ids.indexOf(row.id))

// 接口2：分页过滤查询
const queryFilter = (pager, search) => {
  const { currentPage, pageSize } = pager
  const { name, city } = search
  const start = (currentPage - 1) * pageSize
  const end = currentPage * pageSize
  // 过滤：名称模糊匹配，城市精确匹配
  const filtered = datas.filter((row) => (!name || ~row.name.indexOf(name)) && (!city || row.city === city))
  // 分页
  const data = filtered.slice(start, end)

  return { data, total: datas.length }
}

export default {
  components: {
    TinyDialogSelect: DialogSelect,
    TinyButton: Button,
    TinySearch: Search,
    TinySelect: Select
  },
  data() {
    return {
      multi: true,
      searchData: { name: '', city: '' },
      options: [
        { value: '福州', label: '福州' },
        { value: '深圳', label: '深圳' },
        { value: '赤壁', label: '赤壁' }
      ],
      visible: false,
      dialogOp: {
        top: '20vh',
        width: '800px',
        title: '选择公司',
        beforeClose: this.beforeClose,
        dialogClass: 'custom-dialog-class'
      },
      gridOp: {
        columns: [
          { field: 'id', title: 'ID', width: 40 },
          { field: 'name', title: '名称', showOverflow: 'tooltip' },
          { field: 'province', title: '省份', width: 80 },
          { field: 'city', title: '城市', width: 80 }
        ],
        data: [],
        selectConfig: { reserve: true, checkRowKeys: ['1', '6'] },
        radioConfig: { checkRowKey: '3' }
      },
      pagerOp: {
        currentPage: 1,
        pageSize: 5,
        pageSizes: [5, 10],
        total: 0,
        layout: 'prev, pager, next'
      },
      selectedBoxOp: {
        config: {
          pkField: 'id',
          pkFieldType: 'string',
          showField: ['name', 'city'],
          plugin: Sortable
        }
      }
    }
  },
  methods: {
    beforeClose() {
      return true
    },
    onSizeChange(pageSize) {
      this.pagerOp.pageSize = pageSize
      this.$refs.dialogSelect.queryGridData()
    },
    onCurrentChange(currentPage) {
      this.pagerOp.currentPage = currentPage
      this.$refs.dialogSelect.queryGridData()
    },
    onSearch(key, value) {
      this.searchData.name = value
      this.pagerOp.currentPage = 1
      this.$refs.dialogSelect.queryGridData()
    },
    remoteSearch() {
      return new Promise((resolve) => {
        setTimeout(() => {
          const res = queryFilter(this.pagerOp, this.searchData)
          // 序列化是为了模拟每次返回的都是新对象
          const copy = JSON.parse(JSON.stringify(res.data))

          this.gridOp.data = copy
          this.pagerOp.total = res.total
          // promise返回执行下一步
          resolve()
        }, 300)
      })
    },
    lookupMethod(values) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const res = queryRowsByIds(values)
          // 序列化是为了模拟每次返回的都是新对象
          const copy = JSON.parse(JSON.stringify(res))
          resolve(copy)
        }, 300)
      })
    },
    onDialogSelectChange(values, texts) {
      Modal.message({
        message: `values:${values},texts:${texts}`
      })
    }
  }
}
</script>

<style scoped>
.tiny-demo-dialog-select .tiny-demo-search {
  display: flow-root;
}

.tiny-demo-dialog-select .tiny-demo-search-left,
.tiny-demo-dialog-select .tiny-demo-search-right {
  float: left;
  width: 200px;
  margin-right: 16px;
}
</style>
