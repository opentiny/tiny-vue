<template>
  <tiny-popeditor v-model="value" :grid-op="gridOp" text-field="name" value-field="id" :conditions="conditions">
    <template #search="slotScope">
      <div class="item" style="text-align: center">
        公司名：<input type="text" v-model="params.name" /> 城市：<input type="text" v-model="params.city" />
      </div>
      <div class="item" style="margin-top: 10px; text-align: center">
        公司名：<tiny-input type="text" v-model="params.name" style="width: 30%"></tiny-input> 城市：<tiny-input
          type="text"
          v-model="params.city"
          style="width: 30%"
        ></tiny-input>
      </div>
      <div class="item" style="margin-top: 10px; text-align: center">
        <tiny-button type="primary" @click="slotScope.searchOp.doSearch(params)">Search</tiny-button>
        <tiny-button @click="slotScope.searchOp.doClear(params)">Clear</tiny-button>
      </div>
    </template>
  </tiny-popeditor>
</template>

<script setup>
import { ref } from 'vue'
import { Popeditor as TinyPopeditor, Input as TinyInput, Button as TinyButton } from '@opentiny/vue'

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

const params = ref({
  name: '',
  city: ''
})
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
  data: dataset
})
const conditions = ref([
  { label: '公司名', field: 'name' },
  { label: '城市', field: 'city' }
])
</script>
