<template>
  <div>
    <tiny-layout>
      <tiny-row :flex="true" class="row-bg">
        <tiny-col :span="3">
          <tiny-statistic :value="num" :precision="0" title="用户活跃度"></tiny-statistic>
        </tiny-col>
        <tiny-col :span="3">
          <tiny-statistic :value="num" :precision="2" title="消费额度"></tiny-statistic>
        </tiny-col>
        <tiny-col :span="3">
          <tiny-statistic :value="num" :precision="0" title="来访数量" prefix="view:"></tiny-statistic>
        </tiny-col>
        <tiny-col :span="3">
          <tiny-statistic :value="123" :precision="0" title="男女占比例" suffix="/100"></tiny-statistic>
        </tiny-col>
      </tiny-row>
    </tiny-layout>
  </div>
</template>

<script setup lang="jsx">
import { Statistic as TinyStatistic, Layout as TinyLayout, Row as TinyRow, Col as TinyCol } from '@opentiny/vue'

const num = 306526.23
</script>
