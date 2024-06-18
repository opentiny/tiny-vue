<template>
  <div>
    <tiny-layout>
      <tiny-row :flex="true">
        <tiny-col :span="4">
          <tiny-statistic :value="306">
            <template #prefix><div style="margin-right: 15px">已使用容量(GB)</div></template>
            <template #suffix><div style="font-size: 24px">GB</div></template>
          </tiny-statistic>
        </tiny-col>
        <tiny-col :span="4">
          <tiny-statistic :value="1280" :precision="2">
            <template #prefix><div style="font-size: 24px; font-weight: 600">￥</div></template>
            <template #suffix><div>/年</div></template>
          </tiny-statistic>
        </tiny-col>
        <tiny-col :span="4">
          <tiny-statistic :value="300" suffix="GB"></tiny-statistic>
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
  }
}
</script>
