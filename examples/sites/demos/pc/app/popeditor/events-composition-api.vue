<template>
  <tiny-popeditor
    @change="changeFn"
    v-model="value"
    :grid-op="gridOp"
    text-field="name"
    value-field="id"
    :show-pager="true"
    :pager-op="pagerOp"
    @page-change="handlePageChange"
    @popup="handlePopup"
    @close="handleClose"
  ></tiny-popeditor>
</template>

<script setup>
import { ref } from 'vue'
import { Popeditor as TinyPopeditor, Modal } from '@opentiny/vue'

const value = ref('')
const gridOp = ref({
  columns: [
    {
      field: 'id',
      title: 'ID',
      width: 40
    },
    {
      field: 'name',
      title: '名称'
    },
    {
      field: 'province',
      title: '省份',
      width: 80
    },
    {
      field: 'city',
      title: '城市',
      width: 80
    }
  ],
  data: []
})
const pagerOp = ref({
  pageSize: 2,
  total: 10
})

handlePageChange(1)

function changeFn(val, data) {
  Modal.message({
    message: `值变为${val},${JSON.stringify(data)}`,
    status: 'info'
  })
}

function handlePageChange(val) {
  const dataset = [
    {
      id: '1',
      name: 'GFD科技YX公司',
      city: '福州',
      province: '福建'
    },
    {
      id: '2',
      name: 'WWW科技YX公司',
      city: '深圳',
      province: '广东'
    },
    {
      id: '3',
      name: 'RFV有限责任公司',
      city: '中山',
      province: '广东'
    },
    {
      id: '4',
      name: 'TGB科技YX公司',
      city: '龙岩',
      province: '福建'
    },
    {
      id: '5',
      name: 'YHN科技YX公司',
      city: '韶关',
      province: '广东'
    },
    {
      id: '6',
      name: 'WSX科技YX公司',
      city: '黄冈',
      province: '武汉'
    },
    {
      id: '7',
      name: 'KBG物业YX公司',
      city: '赤壁',
      province: '武汉'
    },
    {
      id: '8',
      name: '深圳市福德宝网络技术YX公司',
      province: '广东',
      city: '深圳'
    },
    {
      id: '9',
      name: 'KBG物业YX公司',
      city: '赤壁',
      province: '武汉'
    },
    {
      id: '10',
      name: '深圳市福德宝网络技术YX公司',
      province: '广东',
      city: '深圳'
    }
  ]
  const offset = (val - 1) * pagerOp.value.pageSize
  gridOp.value.data = dataset.slice(offset, offset + pagerOp.value.pageSize)
}

function handlePopup() {
  setTimeout(() => {
    Modal.message({
      message: 'popup 弹窗打开事件',
      status: 'info'
    })
  }, 0)
}

function handleClose() {
  Modal.message({
    message: 'close 弹窗关闭事件',
    status: 'info'
  })
}
</script>
