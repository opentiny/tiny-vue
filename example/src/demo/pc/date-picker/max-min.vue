<template>
  <tiny-form :inline="true" label-suffix="：">
    <tiny-form-item label="最大值">
      <tiny-date-picker v-model="max" :picker-options="maxOptions"></tiny-date-picker>
    </tiny-form-item>
    <tiny-form-item label="最小值">
      <tiny-date-picker v-model="min" :picker-options="minOptions"></tiny-date-picker>
    </tiny-form-item>
  </tiny-form>
</template>

<script>
import { DatePicker, Form, FormItem } from '@opentiny/vue'

export default {
  components: {
    TinyDatePicker: DatePicker,
    TinyForm: Form,
    TinyFormItem: FormItem
  },
  data() {
    return {
      max: new Date(),
      min: new Date(),
      maxOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now()
        }
      },
      minOptions: {
        disabledDate(time) {
          return time.getTime() < Date.now()
        }
      }
    }
  }
}
</script>
