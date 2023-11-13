<template>
  <div style="width: 480px">
    <h3 style="margin-bottom: 16px; margin-left: 100px">
      是否禁用表单：<tiny-switch v-model="formDisabled"></tiny-switch>
    </h3>
    <tiny-form :disabled="formDisabled" label-width="150px">
      <tiny-form-item label="Input">
        <tiny-input v-model="createData.user"></tiny-input>
      </tiny-form-item>
      <tiny-form-item label="Select">
        <tiny-select v-model="createData.select" placeholder="请选择">
          <tiny-option v-for="item in selectOptions" :key="item.value" :label="item.label" :value="item.value">
          </tiny-option>
        </tiny-select>
      </tiny-form-item>
      <tiny-form-item label="Numeric">
        <tiny-numeric v-model="createData.quantity"></tiny-numeric>
      </tiny-form-item>
      <tiny-form-item label="Switch">
        <tiny-switch v-model="createData.sw"></tiny-switch>
      </tiny-form-item>
      <tiny-form-item label="Radio">
        <tiny-radio v-model="createData.sex" label="1"> 男 </tiny-radio>
        <tiny-radio v-model="createData.sex" label="2" text="女"></tiny-radio>
      </tiny-form-item>
      <tiny-form-item label="Checkbox">
        <tiny-checkbox v-model="createData.checked"> 复选框 </tiny-checkbox>
        <tiny-checkbox v-model="createData.checked2"> 复选框2 </tiny-checkbox>
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
        <tiny-time-picker
          v-model="createData.timePicker"
          :picker-options="{ selectableRange: '18:30:00 - 20:30:00' }"
          placeholder="任意时间点"
        ></tiny-time-picker>
      </tiny-form-item>
      <tiny-form-item label="Droptime">
        <tiny-drop-times v-model="createData.dropTimes"></tiny-drop-times>
      </tiny-form-item>
      <tiny-form-item label="Tooltip">
        <tiny-tooltip effect="light" content="TinyUI Form Demo" placement="right">
          <tiny-input v-model="createData.input" placeholder="click"></tiny-input>
        </tiny-tooltip>
      </tiny-form-item>
      <tiny-form-item label="Textarea">
        <tiny-input v-model="createData.textarea" type="textarea" maxlength="15"> </tiny-input>
      </tiny-form-item>
      <tiny-form-item label="Autocomplete">
        <tiny-autocomplete
          v-model="createData.autocomplete"
          placeholder="请输入内容"
          :fetch-suggestions="querySearch"
        ></tiny-autocomplete>
      </tiny-form-item>
      <tiny-form-item label="ButtonGroup">
        <tiny-button-group :data="groupData"></tiny-button-group>
      </tiny-form-item>
      <tiny-form-item label="Cascader">
        <tiny-cascader :options="options" :props="{ emitPath: false }"></tiny-cascader>
      </tiny-form-item>
      <tiny-form-item label="IpAddress">
        <tiny-ip-address v-model="createData.ipAddress"></tiny-ip-address>
      </tiny-form-item>
      <tiny-form-item label="Link">
        <tiny-link>默认链接</tiny-link>
      </tiny-form-item>
      <tiny-form-item label="PopEditor">
        <tiny-popeditor
          v-model="createData.popEditor"
          placeholder="请选择"
          :grid-op="gridOp"
          text-field="name"
          value-field="id"
        ></tiny-popeditor>
      </tiny-form-item>
      <tiny-form-item label="Slider">
        <tiny-slider v-model="createData.slider"></tiny-slider>
      </tiny-form-item>
    </tiny-form>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import {
  Form as TinyForm,
  FormItem as TinyFormItem,
  Switch as TinySwitch,
  Checkbox as TinyCheckbox,
  Numeric as TinyNumeric,
  Radio as TinyRadio,
  DatePicker as TinyDatePicker,
  DropTimes as TinyDropTimes,
  Tooltip as TinyTooltip,
  Input as TinyInput,
  Button as TinyButton,
  Autocomplete as TinyAutocomplete,
  ButtonGroup as TinyButtonGroup,
  Cascader as TinyCascader,
  CheckboxGroup as TinyCheckboxGroup,
  IpAddress as TinyIpAddress,
  Link as TinyLink,
  Popeditor as TinyPopeditor,
  Select as TinySelect,
  Option as TinyOption,
  Slider as TinySlider,
  TimePicker as TinyTimePicker
} from '@opentiny/vue'

const createData = reactive({
  checked: false,
  checked2: true,
  quantity: '',
  sw: false,
  sex: '1',
  datepicker: '',
  textarea: '',
  dropTimes: '',
  input: '',
  autocomplete: '',
  groupChecked: ['复选框1'],
  ipAddress: '192.168.0.1',
  popEditor: '',
  select: '',
  slider: 28,
  timePicker: new Date(2016, 9, 10, 18, 40),
  timeSelect: ''
})
const formDisabled = ref(false)
const restaurants = ref([
  {
    value: 'GFD科技YX公司',
    address: '福州'
  },
  {
    value: 'WWWW科技YX公司',
    address: '深圳福田区'
  },
  {
    value: 'RFV有限责任公司',
    address: '中山市'
  }
])
const selectOptions = ref([
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
  }
])
const groupData = ref([
  { text: 'Button1', value: 1 },
  { text: 'Button2', value: 2 },
  { text: 'Button3', value: 3 }
])
const gridOp = ref({
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
  ],
  data: [
    {
      id: '1',
      name: 'GFD科技YX公司',
      city: '福州',
      province: '福建'
    },
    {
      id: '2',
      name: 'WWW科技YX公司',
      city: '深圳',
      province: '广东'
    },
    {
      id: '3',
      name: 'RFV有限责任公司',
      city: '中山',
      province: '广东'
    }
  ]
})
const options = ref([
  {
    value: 'zhinan',
    label: '指南',
    children: [
      {
        value: 'anzhuang',
        label: '安装',
        children: [
          {
            value: 'xiangmudengji',
            label: '项目登记'
          },
          {
            value: 'huanjingzhunbei',
            label: '环境准备'
          },
          {
            value: 'anzhuangcli',
            label: '安装 CLI'
          }
        ]
      },
      {
        value: 'kaifa',
        label: '开发',
        children: [
          {
            value: 'yinruzujian',
            label: '引入组件'
          },
          {
            value: 'monishuju',
            label: '模拟数据'
          }
        ]
      }
    ]
  }
])

function querySearch(queryString, cb) {
  cb(queryString ? restaurants.value.filter(createFilter(queryString)) : restaurants.value)
}

function createFilter(queryString) {
  return (restaurant) => restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
}
</script>
