<template>
  <div>
    <tiny-layout>
      <tiny-row :flex="true" class="row-bg">
        <tiny-col :span="6">
          <tiny-statistic :value="num" :value-style="{ color: '#b12220' }" :precision="0" title="点赞数量">
            <template #prefix> Like:</template>
          </tiny-statistic>
        </tiny-col>
        <tiny-col :span="6">
          <tiny-statistic :value="num" :value-style="{ 'color': '#3ac295' }" :precision="0" title="点赞数量">
            <template #prefix> Like:</template>
          </tiny-statistic>
        </tiny-col>
        <tiny-col :span="6">
          <tiny-statistic :value="num" :value-style="[{ 'color': '#e37d29' }]" :precision="0" title="点赞数量">
            <template #prefix> Like:</template>
          </tiny-statistic>
        </tiny-col>
      </tiny-row>
    </tiny-layout>
  </div>
</template>

<script>
import { Statistic, Layout, Row, Col } from '@opentiny/vue'

export default {
  components: {
    TinyStatistic: Statistic,
    TinyLayout: Layout,
    TinyRow: Row,
    TinyCol: Col
  },
  data() {
    return {
      num: 306526.23
    }
  }
}
</script>
