<template>
  <div class="demo-form">
    <div class="demo-form-btns">
      <tiny-button @click="displayOnly = !displayOnly">display-only/{{ displayOnly }}</tiny-button>
    </div>
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
      <!-- TODO 待定位问题 -->
      <!-- <tiny-form-item label="级联选择器">
        <tiny-cascader
          v-model="formData.cascaderValue"
          :options="cascaderOptions"
          :props="{ emitPath: false }"
        ></tiny-cascader>
      </tiny-form-item>
      <tiny-form-item label="级联选择器多选">
        <tiny-cascader
          v-model="formData.cascaderValueArr"
          :options="cascaderOptions"
          :props="{ multiple: true }"
          clearable
          @remove-tag="removeTag"
        ></tiny-cascader>
      </tiny-form-item> -->
      <!-- TODO 待datePicker合入验证 -->
      <!-- <tiny-form-item label="datePicker">
        <tiny-date-picker v-model="formData.datePicker"></tiny-date-picker>
      </tiny-form-item>
      <tiny-form-item label="monthrange">
        <tiny-date-picker
          v-model="formData.monthrange"
          type="monthrange"
          :picker-options="pickerOptions"
        ></tiny-date-picker>
      </tiny-form-item>
      <tiny-form-item label="datePicker1">
        <tiny-date-picker
          v-model="formData.daterangeValue"
          type="daterange"
          :picker-options="onPickOptions"
        ></tiny-date-picker>
      </tiny-form-item> -->
    </tiny-form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import {
  Form as TinyForm,
  FormItem as TinyFormItem,
  Numeric as TinyNumeric,
  Radio as TinyRadio,
  DatePicker as TinyDatePicker,
  Input as TinyInput,
  Button as TinyButton,
  Checkbox as TinyCheckbox,
  CheckboxGroup as TinyCheckboxGroup,
  Switch as TinySwitch,
  Rate as TinyRate,
  Autocomplete as TinyAutocomplete,
  Cascader as TinyCascader,
  Select as TinySelect,
  Option as TinyOption,
  Modal
} from '@opentiny/vue'
import { alert } from '@opentiny/vue-modal'

const displayOnly = ref(true)
const top = ref(false)
const inline = ref(false)
const size = ref('')
const options = ref([
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
])
const onPickOptions = ref({
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
})
const pickerOptions = ref({
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
})
const formData = ref({
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
  restaurants: [],
  autocompleteValue: 'GFD科技有限公司',
  cascaderValue: 'xiangmudengji',
  cascaderValueArr: [
    ['zhinan', 'anzhuang', 'xiangmudengji'],
    ['zhinan', 'anzhuang', 'anzhuangcli'],
    ['zhinan', 'kaifa', 'yinruzujian']
  ]
})
const cascaderOptions = ref([
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
          },
          {
            value: 'chuangjianxiangmu',
            label: '创建项目'
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
  },
  {
    value: 'zujian',
    label: '组件',
    children: [
      {
        value: 'basic',
        label: '框架风格',
        children: [
          {
            value: 'layout',
            label: 'Layout 布局'
          },
          {
            value: 'color',
            label: 'Color 色彩'
          },
          {
            value: 'font',
            label: 'Font 字体'
          },
          {
            value: 'icon',
            label: 'Icon 图标'
          }
        ]
      },
      {
        value: 'form',
        label: '表单组件',
        children: [
          {
            value: 'radio',
            label: 'Radio 单选框'
          },
          {
            value: 'checkbox',
            label: 'Checkbox 多选框'
          },
          {
            value: 'input',
            label: 'Input 输入框'
          },
          {
            value: 'number',
            label: 'Numeric 计数器'
          },
          {
            value: 'select',
            label: 'Select 选择器'
          },
          {
            value: 'cascader',
            label: 'Cascader 级联选择器'
          },
          {
            value: 'switch',
            label: 'Switch 开关'
          },
          {
            value: 'slider',
            label: 'Slider 滑块'
          },
          {
            value: 'time-picker',
            label: 'TimePicker 时间选择器'
          },
          {
            value: 'date-picker',
            label: 'DatePicker 日期选择器'
          },
          {
            value: 'form',
            label: 'Form 表单'
          }
        ]
      },
      {
        value: 'data',
        label: '数据组件',
        children: [
          {
            value: 'tree',
            label: 'Tree 树形控件'
          },
          {
            value: 'pager',
            label: 'Pager 分页'
          }
        ]
      },
      {
        value: 'notice',
        label: '提示组件',
        children: [
          {
            value: 'alert',
            label: 'Alert 警告'
          },
          {
            value: 'loading',
            label: 'Loading 加载'
          }
        ]
      },
      {
        value: 'navigation',
        label: '导航组件',
        children: [
          {
            value: 'menu',
            label: 'NavMenu 导航菜单'
          },
          {
            value: 'tabs',
            label: 'Tabs 标签页'
          },
          {
            value: 'breadcrumb',
            label: 'Breadcrumb 面包屑'
          },
          {
            value: 'steps',
            label: 'Steps 步骤条'
          }
        ]
      },
      {
        value: 'others',
        label: '其他组件',
        children: [
          {
            value: 'rate',
            label: 'Rate 评分'
          },
          {
            value: 'tag',
            label: 'Tag 标签'
          },
          {
            value: 'usercontact',
            label: 'UserContact 联系人'
          },
          {
            value: 'slidebar',
            label: 'SlideBar 滚动块'
          }
        ]
      }
    ]
  }
])
let restaurants

onMounted(() => {
  restaurants = loadAll()
})

function submitClick() {
  alert('提交')
}

function querySearch(queryString, cb) {
  let restaurants = restaurants
  let results = queryString ? restaurants.filter(createFilter(queryString)) : restaurants
  // 调用 callback 返回建议列表的数据
  cb(results)
}

function createFilter(queryString) {
  return (restaurant) => restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
}

function loadAll() {
  return [
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
    },
    {
      value: 'TGB有限公司',
      address: '梅州'
    },
    {
      value: 'YHN科技有限公司',
      address: '韶关'
    },
    {
      value: '康康物业有限公司',
      address: '广州天河区'
    }
  ]
}

function removeTag(val) {
  Modal.message({
    message: '当前触发了 remove-tag 事件删除的值为：' + val,
    status: 'info'
  })
}
</script>

<style scoped>
.demo-form {
  padding-left: 50px;
}
.demo-form-btns {
  margin-bottom: 70px;
}
.demo-form .tiny-input,
.demo-form .tiny-select,
.demo-form .tiny-textarea,
.demo-form .tiny-numeric,
.demo-form .tiny-dept,
.demo-form .tiny-hrapprover,
.demo-form .tiny-user,
.demo-form .tiny-amount,
.demo-form .tiny-area .tiny-select {
  width: 274px !important;
}
</style>
