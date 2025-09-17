<template>
  <div class="demo-footer-slot">
    <tiny-date-picker v-model="value" type="date" placeholder="请选择日期">
      <template #footer="{ confirm }">
        <div class="custom-footer">
          <tiny-button type="primary" @click="confirm">自定义按钮</tiny-button>
        </div>
      </template>
    </tiny-date-picker>
    <tiny-date-picker v-model="dateTimeValue" type="datetime" placeholder="请选择日期时间">
      <template #footer="{ confirm, changeToNow }">
        <div class="custom-footer">
          <tiny-button type="default" @click="changeToNow">自定义此刻</tiny-button>
          <tiny-button type="primary" @click="confirm">自定义按钮</tiny-button>
        </div>
      </template>
    </tiny-date-picker>
    <tiny-date-picker v-model="weekValue" type="week" placeholder="请选择周">
      <template #footer="{ confirm }">
        <div class="custom-footer end">
          <tiny-button type="primary" @click="confirm">自定义按钮</tiny-button>
        </div>
      </template>
    </tiny-date-picker>
    <tiny-date-picker v-model="monthValue" type="month" placeholder="请选择月份">
      <template #footer="{ confirm }">
        <div class="custom-footer end">
          <tiny-button type="primary" @click="confirm">自定义按钮</tiny-button>
        </div>
      </template>
    </tiny-date-picker>
    <tiny-date-picker v-model="yearValue" type="year" placeholder="请选择年份">
      <template #footer="{ confirm }">
        <div class="custom-footer end">
          <tiny-button type="primary" @click="confirm">自定义按钮</tiny-button>
        </div>
      </template>
    </tiny-date-picker>
    <tiny-date-picker v-model="valueRange" type="daterange" start-placeholder="开始日期" end-placeholder="结束日期">
      <template #footer="{ confirm, clear }">
        <div class="custom-footer">
          <tiny-button type="default" @click="clear">自定义清空</tiny-button>
          <tiny-button type="primary" @click="confirm">自定义按钮</tiny-button>
        </div>
      </template>
    </tiny-date-picker>
    <tiny-date-picker
      v-model="valueDateTimeRange"
      type="datetimerange"
      start-placeholder="开始日期时间"
      end-placeholder="结束日期时间"
    >
      <template #footer="{ confirm, clear }">
        <div class="custom-footer">
          <tiny-button type="default" @click="clear">自定义清空</tiny-button>
          <tiny-button type="primary" @click="confirm">自定义按钮</tiny-button>
        </div>
      </template>
    </tiny-date-picker>
    <tiny-date-picker
      v-model="valueMonthRange"
      type="monthrange"
      start-placeholder="开始月份"
      end-placeholder="结束月份"
    >
      <template #footer>
        <div class="custom-footer end">
          <tiny-button type="primary">自定义按钮</tiny-button>
        </div>
      </template>
    </tiny-date-picker>
    <tiny-date-picker v-model="valueYearRange" type="yearrange" start-placeholder="开始年份" end-placeholder="结束年份">
      <template #footer>
        <div class="custom-footer end">
          <tiny-button type="primary">自定义按钮</tiny-button>
        </div>
      </template>
    </tiny-date-picker>
  </div>
</template>

<script>
import { TinyDatePicker, TinyButton } from '@opentiny/vue'

export default {
  components: { TinyDatePicker, TinyButton },
  data() {
    return {
      value: '',
      dateTimeValue: '',
      weekValue: '',
      monthValue: '',
      quarterValue: '',
      yearValue: '',
      valueRange: [],
      valueDateTimeRange: [],
      valueMonthRange: [],
      valueYearRange: []
    }
  }
}
</script>

<style scoped lang="less">
.demo-footer-slot {
  width: 360px;
  gap: 10px;
  display: flex;
  flex-direction: column;
}
.custom-footer {
  display: flex;
  width: 100%;
  justify-content: space-between;
}
.end {
  justify-content: flex-end;
}
</style>
