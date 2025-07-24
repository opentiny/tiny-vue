<template>
  <div>
    <tiny-layout>
      <tiny-row :flex="true">
        <tiny-col :span="8">
          <tiny-statistic :value="num" :precision="0"></tiny-statistic>
        </tiny-col>
        <tiny-col :span="8">
          <tiny-statistic :value="num" :precision="2"></tiny-statistic>
        </tiny-col>
        <tiny-col :span="8">
          <tiny-statistic :value="num"></tiny-statistic>
        </tiny-col>
      </tiny-row>
    </tiny-layout>
  </div>
</template>

<script>
import { TinyStatistic, TinyLayout, TinyRow, TinyCol } from '@opentiny/vue'

export default {
  components: {
    TinyStatistic,
    TinyLayout,
    TinyRow,
    TinyCol
  },
  data() {
    return {
      num: 306526.23
    }
  }
}
</script>
