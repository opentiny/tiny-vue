<template>
  <div>
    <tiny-button @click="fn" type="primary" size="large"> 页面选择器 </tiny-button> 值：{{ value }}
    <tiny-select-view v-model="value" :menus="menus" multiple value-field="employeeNumber" text-field="userName" text-field2="employeeNumber" text-field3="dept" title="选择人员" :required-selected-list="requiredSelectedList" :search-config="searchConfig" :top-config="topConfig" :visible="boxVisibility" @update:visible="boxVisibility = $event">
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
        dept: 'hw业务应用五部门hw业务应用五部门hw业务应用五部门hw业务应用五部门hw业务应用五部门'
      },
      {
        employeeNumber: '00123451',
        userName: '白娘子',
        dept: 'hw业务应用六部门'
      }
    ].concat(
      Array.from({ length: 20 }).map((item, index) => ({
        employeeNumber: '001234' + ('0' + (index + 1)).slice(-2),
        userName: `机器人${index + 1}号`,
        dept: `机器人部门${index + 1}`
      }))
    )

    return {
      value: ['00123450', '00123457', '00123459'],
      boxVisibility: false,
      menus: list,
      requiredSelectedList: ['00123457', '00123459'],
      topConfig: {
        label: '推荐',
        options: list.slice(3, 7)
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
