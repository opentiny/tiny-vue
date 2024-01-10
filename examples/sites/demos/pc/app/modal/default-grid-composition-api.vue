<template>
  <div class="content">
    <tiny-button @click="visible = !visible" :reset-time="0"> 默认插槽 </tiny-button>
    <tiny-modal v-model="visible" :lock-scroll="false" show-footer width="1000">
      <template #default>
        <p>test</p>
        <tiny-grid :tooltip-config="{ 'append-to-body': true }" :data="tableData" :auto-resize="true">
          <tiny-grid-column type="index" width="60"></tiny-grid-column>
          <tiny-grid-column type="selection" width="60"></tiny-grid-column>
          <tiny-grid-column field="name" title="公司名称" show-tip></tiny-grid-column>
          <tiny-grid-column field="address" title="地址" show-overflow="tooltip"></tiny-grid-column>
          <tiny-grid-column field="createdDate" title="创建日期" show-overflow="tooltip"></tiny-grid-column>
          <tiny-grid-column field="city" title="城市文字" show-overflow="tooltip"></tiny-grid-column>
        </tiny-grid>
      </template>
    </tiny-modal>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Button as TinyButton, Modal as TinyModal, Grid as TinyGrid, GridColumn as TinyGridColumn } from '@opentiny/vue'

const visible = ref(false)
const tableData = ref([
  {
    id: '1',
    name: 'GFD科技YX公司 GFD科技YX公司 GFD科技YX公司 GFD科技YX公司 GFD科技YX公司',
    city: '福州 福州 福州 福州 福州 福州 福州 福州 福州 福州',
    address: '中国广东省深圳龙岗区SZ单身公寓',
    createdDate: '2014-04-30 00:56:00 2014-04-30 00:56:00 2014-04-30 00:56:00 2014-04-30 00:56:00'
  },
  {
    id: '2',
    name: 'WWW科技YX公司',
    city: '深圳',
    address: '深圳福田区',
    createdDate: '2016-07-08 12:36:22'
  },
  {
    id: '3',
    name: 'RFV有限责任公司',
    city: '中山',
    address: '深圳福田区',
    createdDate: '2014-02-14 14:14:14'
  }
])
</script>
