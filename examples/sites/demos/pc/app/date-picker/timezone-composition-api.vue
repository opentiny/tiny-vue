<template>
  <div>
    <p>开启时区选择</p>
    <br />
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
    <br />

    <p>默认时间</p>
    <br />
    <div class="demo-date-picker-wrap">
      <tiny-date-picker v-model="value" type="datetime"></tiny-date-picker>
    </div>
    <br />

    <p>显示为东八区时间</p>
    <br />
    <div class="demo-date-picker-wrap">
      <tiny-date-picker v-model="referenceDate" type="datetime" :isutc8="true"></tiny-date-picker>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { DatePicker as TinyDatePicker, Modal } from '@opentiny/vue'
import tzData from '@opentiny/vue-renderless/picker/timezone'

const timezoneValue = ref('')
const value = ref('')
const referenceDate = ref('2020-10-28T00:00:00.000+0800')

function selectChange(tz) {
  Modal.message({ message: `当前值为 ${tz.tz.name}`, status: 'info' })
}
</script>
