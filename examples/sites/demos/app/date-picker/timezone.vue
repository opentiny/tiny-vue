<template>
  <div>
    <p>开启时区选择</p>
    <div class="demo-date-picker-wrap">
      <tiny-date-picker
        v-model="timezoneValue"
        type="datetime"
        :show-timezone="true"
        :timezone-data="tzData"
        default-timezone="Etc/GMT+12"
        @select-change="selectChange"
      ></tiny-date-picker>
    </div>

    <p>默认时间</p>
    <div class="demo-date-picker-wrap">
      <tiny-date-picker v-model="value" type="datetime"></tiny-date-picker>
    </div>

    <p>显示为东八区时间</p>
    <div class="demo-date-picker-wrap">
      <tiny-date-picker v-model="referenceDate" type="datetime" :isutc8="true"></tiny-date-picker>
    </div>
  </div>
</template>

<script>
import { DatePicker, Modal } from '@opentiny/vue'
import tzData from '@opentiny/vue-renderless/picker/timezone'

export default {
  components: {
    TinyDatePicker: DatePicker
  },
  data() {
    return {
      tzData,
      timezoneValue: '',
      value: '',
      referenceDate: '2020-10-28T00:00:00.000+0800'
    }
  },
  methods: {
    selectChange(tz) {
      Modal.message({ message: `当前值为 ${tz.tz.name}`, status: 'info' })
    }
  }
}
</script>

<style scoped>
.demo-date-picker-wrap {
  width: 280px;
}
</style>
