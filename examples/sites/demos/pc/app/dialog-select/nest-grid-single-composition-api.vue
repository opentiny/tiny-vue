<template>
  <div class="tiny-demo">
    <tiny-button @click="state.visible = !state.visible">{{ `${state.visible ? '关闭' : '打开'}窗口` }}</tiny-button>
    <tiny-dialog-select
      ref="dialogSelect"
      class="tiny-demo-dialog-select"
      :visible="state.visible"
      @update:visible="state.visible = $event"
      popseletor="grid"
      :dialog-op="state.dialogOp"
      :grid-op="state.gridOp"
      :pager-op="state.pagerOp"
      :remote-search="remoteSearch"
      :lookup-method="lookupMethod"
      :before-close="beforeClose"
      @size-change="onSizeChange"
      @current-change="onCurrentChange"
      @change="onDialogSelectChange"
      value-field="id"
      text-field="name"
      :main-height="240"
    >
      <template #search>
        <div class="tiny-demo-search">
          <div class="tiny-demo-search-left">
            <tiny-search placeholder="公司名称" is-enter-search @search="onSearch"></tiny-search>
          </div>
          <div class="tiny-demo-search-right">
            <tiny-select
              v-model="state.searchData.city"
              placeholder="选择城市"
              :options="state.options"
              clearable
              @change="onCitySearch"
            ></tiny-select>
          </div>
        </div>
      </template>
    </tiny-dialog-select>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { TinyDialogSelect, TinyButton, TinySearch, TinySelect } from '@opentiny/vue'

// 模拟服务侧数据
const datas = [
  { id: '1', name: 'GFD 科技有限公司', city: '福州', province: '福建' },
  { id: '2', name: 'WWW 科技有限公司', city: '深圳', province: '广东' },
  { id: '3', name: 'RFV 有限责任公司', city: '中山', province: '广东' },
  { id: '4', name: 'TGB 科技有限公司', city: '龙岩', province: '福建' },
  { id: '5', name: 'YHN 科技有限公司', city: '韶关', province: '广东' },
  { id: '6', name: 'WSX 科技有限公司', city: '黄冈', province: '湖北' },
  { id: '7', name: 'KBG 物业有限公司', city: '赤壁', province: '湖北' },
  { id: '8', name: '深圳市福德宝网络技术有限公司', city: '深圳', province: '广东' },
  { id: '9', name: 'KBG 物业有限公司', city: '赤壁', province: '湖北' },
  { id: '10', name: '深圳市福德宝网络技术有限公司', city: '深圳', province: '广东' }
]

// 接口 1：根据一组数据 id 查询这组数据
const queryRowsByIds = (ids) => datas.filter((row) => ~ids.indexOf(row.id))

// 接口 2：分页过滤查询
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

const beforeClose = () => {
  return true
}

const dialogSelect = ref('')

const state = reactive({
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
    beforeClose,
    dialogClass: 'custom-dialog-class'
  },
  gridOp: {
    columns: [
      { field: 'id', title: 'ID', width: 50 },
      { field: 'name', title: '名称', showOverflow: 'tooltip' },
      { field: 'province', title: '省份', width: 80 },
      { field: 'city', title: '城市', width: 80 }
    ],
    data: [],
    radioConfig: { checkRowKey: '1' },
    border: false, // 设置边框
    size: 'small' // 设置表格尺寸
  },
  pagerOp: {
    currentPage: 1,
    pageSize: 5,
    pageSizes: [5, 10],
    total: 0,
    layout: 'prev, pager, next',
    size: 'mini'
  }
})

const onSizeChange = (pageSize) => {
  state.pagerOp.pageSize = pageSize
  dialogSelect.value.queryGridData()
}

const onCurrentChange = (currentPage) => {
  state.pagerOp.currentPage = currentPage
  dialogSelect.value.queryGridData()
}

const onSearch = (key, value) => {
  state.searchData.name = value
  state.pagerOp.currentPage = 1
  dialogSelect.value.queryGridData()
}

const onCitySearch = (value) => {
  state.searchData.city = value
  state.pagerOp.currentPage = 1
  dialogSelect.value.queryGridData()
}

const remoteSearch = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const res = queryFilter(state.pagerOp, state.searchData)
      // 序列化是为了模拟每次返回的都是新对象
      const copy = JSON.parse(JSON.stringify(res.data))

      state.gridOp.data = copy
      state.pagerOp.total = res.total
      // promise 返回执行下一步
      resolve()
    }, 300)
  })
}

const lookupMethod = (values) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const res = queryRowsByIds(values)
      // 序列化是为了模拟每次返回的都是新对象
      const copy = JSON.parse(JSON.stringify(res))
      resolve(copy)
    }, 300)
  })
}

const onDialogSelectChange = (values, texts, selectedDatas) => {
  // 打印 change 回调数据，控制台查看
  console.log({ values, texts, selectedDatas })
}
</script>

<style scoped lang="less">
.tiny-demo-search {
  display: flex;

  .tiny-demo-search-left {
    flex: 1;
  }
  .tiny-demo-search-right {
    width: 200px;
    margin-left: 8px;
  }
}
</style>
