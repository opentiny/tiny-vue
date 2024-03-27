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
      num: 306526.23,
      msg: { value: '额度' },
      money: { value: '存款' }
    }
  }
}
</script>
