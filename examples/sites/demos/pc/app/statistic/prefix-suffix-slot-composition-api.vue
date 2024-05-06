<template>
  <div>
    <tiny-layout>
      <tiny-row :flex="true">
        <tiny-col :span="8">
          <tiny-statistic :value="300" prefix="存储平均值" suffix="GB"></tiny-statistic>
        </tiny-col>
        <tiny-col :span="8">
          <tiny-statistic :value="306">
            <template #prefix>已使用容量(GB)</template>
            <template #suffix><span style="font-size: 32px">GB</span></template>
          </tiny-statistic>
        </tiny-col>
      </tiny-row>
    </tiny-layout>
  </div>
</template>

<script setup>
import { Statistic as TinyStatistic, Layout as TinyLayout, Row as TinyRow, Col as TinyCol } from '@opentiny/vue'
</script>
