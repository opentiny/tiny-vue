<template>
  <tiny-popeditor
    v-model="value"
    placeholder="请选择"
    :grid-op="gridOp"
    text-field="name"
    value-field="id"
  ></tiny-popeditor>
</template>

<script setup>
import { ref } from 'vue'
import { TinyPopeditor } from '@opentiny/vue'

const dataset = [
  {
    id: '1',
    name: 'GFD 科技 YX 公司 GFD 科技 YX 公司 GFD 科技 YX 公司 GFD 科技 YX 公司 GFD 科技 YX 公司 GFD 科技 YX 公司 GFD 科技 YX 公司',
    city: '福州',
    province: '福建'
  },
  {
    id: '2',
    name: 'WWW 科技 YX 公司',
    city: '深圳',
    province: '广东'
  },
  {
    id: '3',
    name: 'RFV 有限责任公司',
    city: '中山',
    province: '广东'
  },
  {
    id: '4',
    name: 'TGB 科技 YX 公司',
    city: '龙岩',
    province: '福建'
  },
  {
    id: '5',
    name: 'YHN 科技 YX 公司',
    city: '韶关',
    province: '广东'
  },
  {
    id: '6',
    name: 'WSX 科技 YX 公司',
    city: '黄冈',
    province: '武汉'
  },
  {
    id: '7',
    name: 'KBG 物业 YX 公司',
    city: '赤壁',
    province: '武汉'
  },
  {
    id: '8',
    name: '深圳市福德宝网络技术 YX 公司',
    province: '广东',
    city: '深圳'
  },
  {
    id: '9',
    name: 'KBG 物业 YX 公司',
    city: '赤壁',
    province: '武汉'
  },
  {
    id: '10',
    name: '深圳市福德宝网络技术 YX 公司',
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
      width: 50
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
