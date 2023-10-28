<template>
  <div class="w-96">
    <div class="mb-5">
      <tiny-button @click="displayOnly = !displayOnly">display-only/{{ displayOnly }}</tiny-button>
    </div>
    <tiny-form :inline="inline" :display-only="displayOnly">
      <tiny-form-item label="输入框">
        <tiny-input v-model="createData.user"></tiny-input>
      </tiny-form-item>
      <tiny-form-item label="密码框">
        <tiny-input type="password" v-model="createData.password"></tiny-input>
      </tiny-form-item>
      <tiny-form-item label="文本域">
        <tiny-input v-model="createData.textarea" type="textarea"></tiny-input>
      </tiny-form-item>
      <tiny-form-item label="计数器">
        <tiny-numeric v-model="createData.quantity" unit="个"></tiny-numeric>
      </tiny-form-item>
      <tiny-form-item label="开关">
        <tiny-switch v-model="createData.sw"></tiny-switch>
      </tiny-form-item>
      <tiny-form-item label="评分">
        <tiny-rate v-model="createData.rate" show-text></tiny-rate>
      </tiny-form-item>
      <tiny-form-item label="单选框">
        <tiny-radio v-model="createData.sex" label="1">男</tiny-radio>
        <tiny-radio v-model="createData.sex" label="2" text="女"></tiny-radio>
      </tiny-form-item>
      <tiny-form-item label="单选框组单选框组">
        <tiny-radio-group v-model="createData.radioGroup">
          <tiny-radio :label="3">备选项1</tiny-radio>
          <tiny-radio :label="6">备选项2</tiny-radio>
        </tiny-radio-group>
      </tiny-form-item>
      <tiny-form-item label="复选框">
        <tiny-checkbox v-model="createData.checked">复选框</tiny-checkbox>
        <tiny-checkbox v-model="createData.checked2">复选框2</tiny-checkbox>
      </tiny-form-item>
      <tiny-form-item label="复选框组">
        <tiny-checkbox-group v-model="createData.groupChecked">
          <tiny-checkbox label="复选框1" name="name1"></tiny-checkbox>
          <tiny-checkbox label="复选框2" name="name2"></tiny-checkbox>
        </tiny-checkbox-group>
      </tiny-form-item>
      <tiny-form-item label="日期选择">
        <tiny-cell :data="formatDate(createData.date)" @click="dateVisibility = true"></tiny-cell>
        <tiny-date-picker-mobile
          v-model="createData.date"
          title="日期选择"
          :visible="dateVisibility"
          @update:visible="dateVisibility = $event"
        >
        </tiny-date-picker-mobile>
      </tiny-form-item>
      <tiny-form-item label="日期时间选择日期时间选择日期时间选择">
        <tiny-cell :data="formatDatetime(createData.datetime)" @click="datetimeVisibility = true"></tiny-cell>
        <tiny-date-picker-mobile
          v-model="createData.datetime"
          type="datetime"
          title="日期时间选择"
          :visible="datetimeVisibility"
          @update:visible="datetimeVisibility = $event"
        >
        </tiny-date-picker-mobile>
      </tiny-form-item>
      <tiny-form-item label="下拉单选">
        <tiny-cell :data="getSelectLabel(createData.selectValue)" @click="selectVisibility = true"></tiny-cell>
        <tiny-select-mobile
          v-model="createData.selectValue"
          title="下拉单选"
          :search-config="searchConfig"
          :menus="menus"
          :visible="selectVisibility"
          @update:visible="selectVisibility = $event"
        ></tiny-select-mobile>
      </tiny-form-item>
      <tiny-form-item>
        <tiny-button type="primary" @click="submitClick">提交</tiny-button>
      </tiny-form-item>
    </tiny-form>
  </div>
</template>

<script>
import {
  Form,
  FormItem,
  Switch,
  Checkbox,
  Numeric,
  Radio,
  Rate,
  Input,
  Button,
  CheckboxGroup,
  RadioGroup,
  SelectMobile,
  DatePickerMobileFirst,
  Cell
} from '@opentiny/vue'

export default {
  components: {
    TinyDatePickerMobile: DatePickerMobileFirst,
    TinySelectMobile: SelectMobile,
    TinyCell: Cell,
    TinyForm: Form,
    TinyFormItem: FormItem,
    TinyCheckbox: Checkbox,
    TinySwitch: Switch,
    TinyNumeric: Numeric,
    TinyRadio: Radio,
    TinyRate: Rate,
    TinyInput: Input,
    TinyButton: Button,
    TinyCheckboxGroup: CheckboxGroup,
    TinyRadioGroup: RadioGroup
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
      displayOnly: true,
      top: false,
      inline: false,
      size: '',
      dateVisibility: false,
      datetimeVisibility: false,
      selectVisibility: false,
      searchConfig: {
        options: list
      },
      menus: list,
      createData: {
        textarea:
          'textarea textarea textarea textarea textarea textarea textarea textarea textarea textarea textarea textarea textarea textarea textarea textarea textarea textarea textarea ',
        checked: false,
        checked2: true,
        radioGroup: 3,
        groupChecked: ['复选框1'],
        quantity: '1',
        sw: false,
        sex: '1',
        rate: 3,
        user: 'input input input input input input input input input input input input input input input input ',
        password: '213213213',
        date: '',
        datetime: '',
        selectValue: ''
      },
      formDisabled: false
    }
  },
  mounted() {},
  methods: {
    submitClick() {},
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
