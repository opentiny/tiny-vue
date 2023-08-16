<template>
  <div>
    <h5>组件属性draggable默认为true，不需设置就可以在标题栏按住鼠标拖动弹出窗口：</h5>
    <tiny-popeditor v-model="value" :grid-op="gridOp" text-field="name" value-field="id"></tiny-popeditor>
    <h5>如果设置属性draggable为false，那么就不能拖动弹出窗口：</h5>
    <tiny-popeditor
      v-model="value"
      :grid-op="gridOp"
      text-field="name"
      value-field="id"
      :draggable="false"
    ></tiny-popeditor>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Popeditor as TinyPopeditor } from '@opentiny/vue'

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
      title: '名称',
      showOverflow: 'tooltip'
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
  data: dataset
})
</script>
