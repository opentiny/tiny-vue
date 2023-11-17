<template>
  <div class="demo-form">
    <div style="margin-bottom: 12px">表单是否只展示：<tiny-switch v-model="displayOnly"></tiny-switch></div>
    <tiny-form :inline="inline" label-position="right" :display-only="displayOnly">
      <tiny-form-item label="input">
        <tiny-input v-model="formData.input"></tiny-input>
      </tiny-form-item>
      <tiny-form-item label="radio">
        <tiny-radio v-model="formData.radioValue" label="1">男</tiny-radio>
        <tiny-radio v-model="formData.radioValue" label="2" text="女"></tiny-radio>
      </tiny-form-item>
      <tiny-form-item label="select">
        <tiny-select v-model="formData.select">
          <tiny-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </tiny-option>
        </tiny-select>
      </tiny-form-item>
      <tiny-form-item label="select1">
        <tiny-select v-model="formData.select1" multiple>
          <tiny-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </tiny-option>
        </tiny-select>
      </tiny-form-item>
      <tiny-form-item label="文本域">
        <tiny-input v-model="formData.textareaValue" type="textarea"></tiny-input>
      </tiny-form-item>
      <tiny-form-item label="我的密码">
        <tiny-input v-model="formData.passwordValue" type="password"></tiny-input>
      </tiny-form-item>
      <tiny-form-item label="数字">
        <tiny-numeric v-model="formData.quantity" unit="个"></tiny-numeric>
      </tiny-form-item>
      <tiny-form-item label="复选框">
        <tiny-checkbox v-model="formData.checked">复选框</tiny-checkbox>
      </tiny-form-item>
      <tiny-form-item label="复选框组">
        <tiny-checkbox-group v-model="formData.checkedArr">
          <tiny-checkbox label="复选框1" name="name1"></tiny-checkbox>
          <tiny-checkbox label="复选框2" name="name2"></tiny-checkbox>
        </tiny-checkbox-group>
      </tiny-form-item>
      <tiny-form-item label="开关">
        <tiny-switch></tiny-switch>
      </tiny-form-item>
      <tiny-form-item label="评分">
        <tiny-rate v-model="formData.rate1" show-text></tiny-rate>
      </tiny-form-item>
      <tiny-form-item label="自动完成">
        <tiny-autocomplete
          v-model="formData.autocompleteValue"
          :fetch-suggestions="querySearch"
          placeholder="请输入内容"
        ></tiny-autocomplete>
      </tiny-form-item>
      <tiny-form-item label="datePicker">
        <tiny-date-picker v-model="formData.datePicker"></tiny-date-picker>
      </tiny-form-item>
    </tiny-form>
  </div>
</template>

<script>
import {
  Form,
  FormItem,
  Numeric,
  Radio,
  DatePicker,
  Input,
  Button,
  Checkbox,
  CheckboxGroup,
  Switch,
  Rate,
  Autocomplete,
  Cascader,
  Select,
  Option,
  Modal
} from '@opentiny/vue'

export default {
  components: {
    TinyForm: Form,
    TinyFormItem: FormItem,
    TinyNumeric: Numeric,
    TinyRadio: Radio,
    TinyDatePicker: DatePicker,
    TinyInput: Input,
    TinyButton: Button,
    TinySelect: Select,
    TinyOption: Option,
    TinyCheckbox: Checkbox,
    TinyCheckboxGroup: CheckboxGroup,
    TinySwitch: Switch,
    TinyRate: Rate,
    TinyAutocomplete: Autocomplete,
    TinyCascader: Cascader
  },
  data() {
    return {
      displayOnly: true,
      top: false,
      inline: false,
      size: '',
      options: [
        {
          value: '选项1',
          label: '黄金糕'
        },
        {
          value: '选项2',
          label: '双皮奶'
        },
        {
          value: '选项3',
          label: '蚵仔煎'
        },
        {
          value: '选项4',
          label: '龙须面'
        },
        {
          value: '选项5',
          label: '北京烤鸭'
        }
      ],
      onPickOptions: {
        onPick: (val) => {
          if (val.maxDate) {
            Modal.message({
              message: '当前获取的值 maxDate' + val.maxDate,
              status: 'info'
            })
            Modal.message({
              message: '当前获取的值 minDate：' + val.minDate,
              status: 'info'
            })
          }
        }
      },
      pickerOptions: {
        shortcuts: [
          {
            text: '本月',
            onClick(picker) {
              const date = new Date()
              const tmp = new Date(date.getFullYear(), date.getMonth() + 1, 1, 0, 0, 0)
              const start = new Date(date.getFullYear(), date.getMonth(), 1, 0, 0, 0)
              const end = new Date(tmp.getTime() - 1)
              picker.$emit('pick', [start, end])
            }
          },
          {
            text: '今年至今',
            onClick(picker) {
              const date = new Date()
              const start = new Date(date.getFullYear(), 0)
              const end = new Date()
              picker.$emit('pick', [start, end])
            }
          },
          {
            text: '最近六个月',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setMonth(start.getMonth() - 6)
              picker.$emit('pick', [start, end])
            }
          }
        ]
      },
      formData: {
        input:
          '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111',
        radioValue: '1',
        select: '选项1',
        select1: ['选项1', '选项2'],
        datePicker: '2022-01-01',
        daterangeValue: [new Date(), new Date(2019, 12, 12)],
        value: '88.88',
        Company: '0231',
        Country: 'FR',
        Currency: 'VUV',
        Dept: '022471',
        DropRoles: '1001',
        Hrapprover: '022471',
        person: 'test1',
        user: '655783272594485',
        monthrange: ['2022-01', '2023-01'],
        quantity: '1',
        textareaValue:
          '大苏打撒旦大苏打撒旦大苏打撒旦大苏打撒旦大苏打撒旦大苏打撒旦大苏打撒旦大苏打撒旦大苏打撒旦大苏打撒旦大苏打撒旦大苏打撒旦大苏打撒旦大苏打撒旦大苏打撒旦大苏打撒旦大苏打撒旦大苏打撒旦大苏打撒旦大苏打撒旦大苏打撒旦大苏打撒旦大苏打撒旦大苏打撒旦大苏打撒旦大苏打撒旦大苏打撒旦大苏打撒旦大苏打撒旦大苏打撒旦大苏打撒旦大苏打撒旦大苏打撒旦大苏打撒旦大苏打撒旦大苏打撒旦大苏打撒旦大苏打撒旦大苏打撒旦大苏打撒旦大苏打撒旦大苏打撒旦大苏打撒旦大苏打撒旦大苏打撒旦大苏打撒旦大苏打撒旦大苏打撒旦大苏打撒旦大苏打撒旦大苏打撒旦大苏打撒旦大苏打撒旦大苏打撒旦大苏打撒旦大苏打撒旦大苏打撒旦大苏打撒旦大苏打撒旦大苏打撒旦大苏打撒旦大苏打撒旦大苏打撒旦大苏打撒旦大苏打撒旦大苏打撒旦大苏打撒旦大苏打撒旦大苏打撒旦大苏打撒旦大苏打撒旦大苏打撒旦大苏打撒旦大苏打撒旦大苏打撒旦大苏打撒旦大苏打撒旦大苏打撒旦大苏打撒旦大苏打撒旦大苏打撒旦大苏打撒旦大苏打撒旦大苏打撒旦大苏打撒旦大苏打撒旦大苏打撒旦大苏打撒旦',
        checked: true,
        checkedArr: ['复选框1'],
        rate1: 2,
        passwordValue: '12345',
        restaurants: [
          {
            value: 'GFD科技有限公司',
            address: '福州'
          },
          {
            value: 'WWWW科技有限公司',
            address: '深圳福田区'
          }
        ],
        autocompleteValue: 'GFD科技有限公司'
      }
    }
  },
  methods: {
    querySearch(queryString, cb) {
      let restaurants = this.restaurants
      let results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants
      // 调用 callback 返回建议列表的数据
      cb(results)
    },
    createFilter(queryString) {
      return (restaurant) => restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
    },
    loadAll() {
      return
    }
  }
}
</script>

<style scoped>
.demo-form {
  width: 380px;
}
</style>
