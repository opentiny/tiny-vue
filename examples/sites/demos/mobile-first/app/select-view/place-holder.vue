<template>
  <div>
    <tiny-button @click="fn" type="primary"> 页面选择器 </tiny-button> 值：{{ value }}
    <tiny-select-view
      v-model="value"
      :menus="menus"
      value-field="employeeNumber"
      text-field="userName"
      text-field2="dept"
      title="选择人员"
      :search-config="searchConfig"
      :top-config="topConfig"
      :visible="boxVisibility"
      @update:visible="boxVisibility = $event"
      placeholder="自定义placeholder"
    >
    </tiny-select-view>
  </div>
</template>

<script>
import { SelectView, Button } from '@opentiny/vue'

export default {
  components: {
    TinySelectView: SelectView,
    TinyButton: Button
  },
  data() {
    const list = [
      {
        employeeNumber: '00123456',
        userName: '张三',
        dept: 'hw业务应用资源中心'
      },
      {
        employeeNumber: '00123457',
        userName: '李四',
        dept: 'hw业务应用二部门'
      },
      {
        employeeNumber: '00123458',
        userName: '王五',
        dept: 'hw业务应用三部门'
      },
      {
        employeeNumber: '00123459',
        userName: '赵六',
        dept: 'hw业务应用四部门'
      },
      {
        employeeNumber: '00123450',
        userName: '许仙',
        dept: 'hw业务应用五部门'
      },
      {
        employeeNumber: '00123451',
        userName: '白娘子',
        dept: 'hw业务应用六部门'
      }
    ]

    return {
      value: '00123450',
      boxVisibility: false,
      menus: list,
      topConfig: {
        label: '推荐',
        options: list.slice(3)
      },
      searchConfig: {
        searchMethod: null
      }
    }
  },
  methods: {
    fn() {
      this.boxVisibility = true
    }
  }
}
</script>
