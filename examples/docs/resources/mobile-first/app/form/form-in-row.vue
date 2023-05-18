<template>
  <tiny-form :inline="true" label-suffix="：" size="small">
    <tiny-form-item label="姓名">
      <tiny-input v-model="formData.name" placeholder="123"></tiny-input>
    </tiny-form-item>
    <tiny-form-item label="数字">
      <tiny-numeric v-model="formData.quantity"></tiny-numeric>
    </tiny-form-item>
    <tiny-form-item label="单选">
      <tiny-radio v-model="formData.sex" label="1">男</tiny-radio>
      <tiny-radio v-model="formData.sex" label="2" text="女"></tiny-radio>
    </tiny-form-item>
    <tiny-form-item label="日期选择">
      <tiny-cell :data="formatDate(formData.date)" @click="dateVisibility = true"></tiny-cell>
      <tiny-date-picker-mobile v-model="formData.date" title="日期选择" :visible="dateVisibility" @update:visible="dateVisibility = $event">
      </tiny-date-picker-mobile>
    </tiny-form-item>
    <tiny-form-item label="日期时间选择">
      <tiny-cell :data="formatDatetime(formData.datetime)" @click="datetimeVisibility = true"></tiny-cell>
      <tiny-date-picker-mobile v-model="formData.datetime" type="datetime" title="日期时间选择" :visible="datetimeVisibility" @update:visible="datetimeVisibility = $event">
      </tiny-date-picker-mobile>
    </tiny-form-item>
    <tiny-form-item label="下拉单选">
      <tiny-cell :data="getSelectLabel(formData.selectValue)" @click="selectVisibility = true"></tiny-cell>
      <tiny-select-mobile v-model="formData.selectValue" title="下拉单选" :search-config="searchConfig" :menus="menus" :visible="selectVisibility" @update:visible="selectVisibility = $event"></tiny-select-mobile>
    </tiny-form-item>
  </tiny-form>
</template>

<script>
import { Form, FormItem, Numeric, Radio, Input, SelectMobile, DatePickerMobileFirst, Cell } from '@opentiny/vue'

export default {
  components: {
    TinyDatePickerMobile: DatePickerMobileFirst,
    TinySelectMobile: SelectMobile,
    TinyCell: Cell,
    TinyForm: Form,
    TinyFormItem: FormItem,
    TinyNumeric: Numeric,
    TinyRadio: Radio,
    TinyInput: Input
  },
  data() {
    const list = [
      {
        id: 1,
        label: '进行中'
      },
      {
        id: 2,
        label: '未开始'
      },
      {
        id: 3,
        label: '已完成'
      },
      {
        id: 4,
        label:
          '已过期已过期已过期已过期已过期已过期已过期已过期已过期已过期已过期已过期已过期已过期已过期已过期已过期已过期已过期已过期已过期已过期已过期已过期已过期已过期已过期已过期'
      }
    ]
    return {
      dateVisibility: false,
      datetimeVisibility: false,
      selectVisibility: false,
      searchConfig: {
        options: list
      },
      menus: list,
      formData: {
        quantity: '',
        sex: '',
        name: '',
        date: '',
        datetime: '',
        selectValue: ''
      }
    }
  },
  methods: {
    getSelectLabel(value) {
      if (!value) return ''
      return this.menus.find((item) => item.id === value)?.label
    },
    formatDate(value) {
      if (!value) return ''
      const date = new Date(value)
      return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`
    },
    formatDatetime(value) {
      if (!value) return ''
      const date = new Date(value)
      return this.getFormatDate(date)
    },
    addZero(time) {
      return ('0' + time).slice(-2)
    },
    getFormatDate(date) {
      // 格式示例：2020/11/11 12:01:22
      return `${date.getFullYear()}/${this.addZero(date.getMonth() + 1)}/${this.addZero(date.getDate())} ${this.addZero(
        date.getHours()
      )}:${this.addZero(date.getMinutes())}:${this.addZero(date.getSeconds())}`
    }
  }
}
</script>

<style scoped>
#form .tiny-input {
  width: 300px;
}
</style>
