<template>
  <div>
    <tiny-layout>
      <tiny-row :flex="true">
        <tiny-col :span="8">
          <tiny-statistic
            :value="306526"
            :value-style="{ 'color': '#3ac295' }"
            :title="{ value: '进行中', position: 'top' }"
          >
          </tiny-statistic>
        </tiny-col>
        <tiny-col :span="8">
          <tiny-statistic
            :value="306526.23"
            :value-style="[{ 'color': '#eb1212', 'text-align': 'center' }]"
            :title="{ position: 'bottom' }"
          >
            <template #title>
              <div class="title-content">失败</div>
            </template>
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
  }
}
</script>

<style scoped>
.title-content {
  width: 90px;
  text-align: center;
  color: #a9a9a9;
  font-weight: 600;
}
</style>
