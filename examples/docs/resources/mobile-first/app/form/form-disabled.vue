<template>
  <div style="width: 450px">
    <h3>
      <span>点击切换表单状态</span>
      <tiny-button type="primary" @click="formDisabled = !formDisabled">{{
        formDisabled ? '启用表单' : '禁用表单'
      }}</tiny-button>
      <span>disabled: {{ !!formDisabled }}</span>
    </h3>
    <tiny-form :disabled="formDisabled" label-position="top" ref="createData" label-width="150px">
      <tiny-form-item label="Input">
        <tiny-input v-model="createData.user"></tiny-input>
      </tiny-form-item>
      <tiny-form-item label="Numeric">
        <tiny-numeric v-model="createData.quantity"></tiny-numeric>
      </tiny-form-item>
      <tiny-form-item label="Switch">
        <tiny-switch v-model="createData.sw"></tiny-switch>
      </tiny-form-item>
      <tiny-form-item label="Radio">
        <tiny-radio v-model="createData.sex" label="1">男</tiny-radio>
        <tiny-radio v-model="createData.sex" label="2" text="女"></tiny-radio>
      </tiny-form-item>
      <tiny-form-item label="Checkbox">
        <tiny-checkbox v-model="createData.checked">复选框</tiny-checkbox>
        <tiny-checkbox v-model="createData.checked2">复选框2</tiny-checkbox>
      </tiny-form-item>
      <tiny-form-item label="CheckboxGroup">
        <tiny-checkbox-group v-model="createData.groupChecked">
          <tiny-checkbox label="复选框1" name="name1"></tiny-checkbox>
          <tiny-checkbox label="复选框2" name="name2"></tiny-checkbox>
        </tiny-checkbox-group>
      </tiny-form-item>
      <tiny-form-item label="Datepicker">
        <tiny-date-picker v-model="createData.datepicker"></tiny-date-picker>
      </tiny-form-item>
      <tiny-form-item label="TimePicker">
        <tiny-time-picker v-model="createData.timePicker" :picker-options="{ selectableRange: '18:30:00 - 20:30:00' }" placeholder="任意时间点"></tiny-time-picker>
      </tiny-form-item>
      <tiny-form-item label="Tooltip">
        <tiny-tooltip effect="light" content="TINY Form Demo" placement="right">
          <tiny-input v-model="createData.input" placeholder="click"></tiny-input>
        </tiny-tooltip>
      </tiny-form-item>
      <tiny-form-item label="Textarea">
        <tiny-input v-model="createData.textarea" type="textarea" maxlength="15"> </tiny-input>
      </tiny-form-item>
      <tiny-form-item label="Autocomplete">
        <tiny-autocomplete v-model="createData.autocomplete" placeholder="请输入内容" :fetch-suggestions="querySearch"></tiny-autocomplete>
      </tiny-form-item>
      <tiny-form-item label="ButtonGroup">
        <tiny-button-group :data="groupData"></tiny-button-group>
      </tiny-form-item>
      <tiny-form-item label="IpAddress">
        <tiny-ip-address v-model="createData.ipAddress"></tiny-ip-address>
      </tiny-form-item>
      <tiny-form-item label="Link">
        <tiny-link>默认链接</tiny-link>
      </tiny-form-item>
      <tiny-form-item label="PopEditor">
        <tiny-popeditor v-model="createData.popEditor" placeholder="请选择" :grid-op="gridOp" text-field="name" value-field="id"></tiny-popeditor>
      </tiny-form-item>
      <tiny-form-item label="Slider">
        <tiny-slider v-model="createData.slider"></tiny-slider>
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
  DatePicker,
  Tooltip,
  Input,
  Button,
  Autocomplete,
  ButtonGroup,
  CheckboxGroup,
  IpAddress,
  Link,
  Popeditor,
  Slider,
  TimePicker
} from '@opentiny/vue'

export default {
  components: {
    TinyForm: Form,
    TinyFormItem: FormItem,
    TinyCheckbox: Checkbox,
    TinySwitch: Switch,
    TinyNumeric: Numeric,
    TinyRadio: Radio,
    TinyDatePicker: DatePicker,
    TinyTooltip: Tooltip,
    TinyInput: Input,
    TinyButton: Button,
    TinyAutocomplete: Autocomplete,
    TinyButtonGroup: ButtonGroup,
    TinyCheckboxGroup: CheckboxGroup,
    TinyIpAddress: IpAddress,
    TinyLink: Link,
    TinyPopeditor: Popeditor,
    TinySlider: Slider,
    TinyTimePicker: TimePicker
  },
  data() {
    return {
      createData: {
        user: '',
        checked: false,
        checked2: true,
        quantity: '',
        sw: false,
        sex: '1',
        datepicker: '',
        textarea: '',
        input: '',
        autocomplete: '',
        groupChecked: ['复选框1'],
        ipAddress: '192.168.0.1',
        popEditor: '',
        slider: 28,
        timePicker: new Date(2016, 9, 10, 18, 40),
        timeSelect: ''
      },
      formDisabled: false,
      restaurants: [
        {
          value: 'GFD科技有限公司',
          address: '福州'
        },
        {
          value: 'WWWW科技有限公司',
          address: '深圳福田区'
        },
        {
          value: 'RFV有限责任公司',
          address: '中山市'
        }
      ],
      groupData: [
        { text: 'Button1', value: 1 },
        { text: 'Button2', value: 2 },
        { text: 'Button3', value: 3 }
      ],
      gridOp: {
        columns: [
          {
            field: 'id',
            title: 'ID',
            width: 40
          },
          {
            field: 'name',
            title: '名称',
            showOverflow: 'tooltip'
          },
          {
            field: 'province',
            title: '省份',
            width: 80
          },
          {
            field: 'city',
            title: '城市',
            width: 80
          }
        ]
      }
    }
  },
  methods: {
    submitClick() { },
    querySearch(queryString, cb) {
      cb(queryString ? this.restaurants.filter(this.createFilter(queryString)) : this.restaurants)
    },
    createFilter(queryString) {
      return (restaurant) => restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
    }
  }
}
</script>
