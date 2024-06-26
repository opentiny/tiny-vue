<template>
  <div>
    <tiny-layout>
      <tiny-row :flex="true">
        <tiny-col :span="8">
          <tiny-statistic :value="10010258" :title="{ value: '存储总量', position: 'top' }">
            <template #prefix>已使用容量(GB)</template>
            <template #suffix><span style="font-size: 24px">GB</span></template>
          </tiny-statistic>
        </tiny-col>
        <tiny-col :span="8">
          <tiny-statistic :value="306526.23" :title="{ position: 'bottom' }">
            <template #title>存储平均值</template>
          </tiny-statistic>
        </tiny-col>
      </tiny-row>
    </tiny-layout>
  </div>
</template>

<script setup>
import { Statistic as TinyStatistic, Layout as TinyLayout, Row as TinyRow, Col as TinyCol } from '@opentiny/vue'
</script>
