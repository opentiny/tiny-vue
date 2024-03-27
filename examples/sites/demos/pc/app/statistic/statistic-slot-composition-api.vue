<template>
  <div>
    <tiny-layout>
      <tiny-row :flex="true" class="row-bg">
        <tiny-col :span="3">
          <tiny-statistic :value="10010258" :precision="0">
            <template #title> 活跃度 </template>
          </tiny-statistic>
        </tiny-col>
        <tiny-col :span="3">
          <tiny-statistic :value="num" :precision="2" :title="msg"> </tiny-statistic>
        </tiny-col>
        <tiny-col :span="3">
          <tiny-statistic :value="num" :precision="2" :title="money">
            <template #title:data="{ scoped }">{{ scoped }}</template>
          </tiny-statistic>
        </tiny-col>
        <tiny-col :span="3">
          <tiny-statistic :value="num" :precision="0" title="点赞数量">
            <template #prefix> Like:</template>
          </tiny-statistic>
        </tiny-col>
        <tiny-col :span="3">
          <tiny-statistic :value="600" :precision="0" title="队伍比分">
            <template #suffix>/220</template>
          </tiny-statistic>
        </tiny-col>
      </tiny-row>
    </tiny-layout>
  </div>
</template>

<script setup lang="jsx">
import { Statistic as TinyStatistic, Layout as TinyLayout, Row as TinyRow, Col as TinyCol } from '@opentiny/vue'

const num = 306526.23
const msg = { value: '额度' }
const money = { value: '存款' }
</script>
