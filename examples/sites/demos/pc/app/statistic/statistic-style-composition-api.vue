<template>
  <div>
    <tiny-layout>
      <tiny-row :flex="true">
        <tiny-col :span="6">
          <tiny-statistic
            :value="306526"
            :value-style="{ 'color': '#3ac295' }"
            :title="{ value: '进行中', position: 'top' }"
          >
          </tiny-statistic>
        </tiny-col>
        <tiny-col :span="6">
          <tiny-statistic
            :value="306526.23"
            :value-style="[{ 'color': '#eb1212', 'text-align': 'center', 'width': '200px' }]"
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

<script setup>
import { Statistic as TinyStatistic, Layout as TinyLayout, Row as TinyRow, Col as TinyCol } from '@opentiny/vue'
</script>

<style scoped>
.title-content {
  width: 200px;
  text-align: center;
  color: #a9a9a9;
}
</style>
