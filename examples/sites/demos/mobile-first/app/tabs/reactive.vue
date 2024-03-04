<template>
  <div>
    value={{ value }} select={{ select }}
    <tiny-tabs v-model="activeName">
      value={{ value }} select={{ select }}
      <tiny-tab-item title="表单组件" name="first">
        表单组件,具有与用户交互，并可完成数据采集功能的控件。
      </tiny-tab-item>
      <tiny-tab-item title="数据组件" name="second">
        数据组件,提供了非常强大数据表格功能，在Grid可以展示数据列表，可以对数据列表进行选择、编辑等
      </tiny-tab-item>
      <tiny-tab-item title="导航组件" name="third">
        value={{ value }}
        <tiny-date-picker v-model="value" type="date" title="日期选择"></tiny-date-picker>
        select={{ select }}
        <tiny-select v-model="select" placeholder="请选择" multiple>
          <tiny-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </tiny-option>
        </tiny-select>
      </tiny-tab-item>
      <tiny-tab-item title="业务组件" name="fourth"> 业务组件,与业务紧密相关实现某种业务功能的组件集 </tiny-tab-item>
    </tiny-tabs>
  </div>
</template>

<script>
import { DatePicker, Tabs, TabItem, Select, Option } from '@opentiny/vue'

export default {
  components: {
    TinyDatePicker: DatePicker,
    TinyTabs: Tabs,
    TinyTabItem: TabItem,
    TinySelect: Select,
    TinyOption: Option
  },
  data() {
    return {
      activeName: 'third',
      value: '',
      value2: '',
      value3: '',
      value4: '',

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
      select: ['选项1', '选项2']
    }
  }
}
</script>
