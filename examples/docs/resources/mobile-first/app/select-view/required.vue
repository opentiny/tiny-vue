<template>
  <div>
    <tiny-button @click="fn" type="primary"> 页面选择器 </tiny-button>
    <p>选中值：{{ value }}</p>
    <p>必选项： {{ requiredSelectedList }}</p>

    <tiny-select-view v-model="value" :menus="menus" multiple value-field="employeeNumber" text-field="userName" text-field2="employeeNumber" text-field3="dept" title="选择人员" :search-config="searchConfig" :required-selected-list="requiredSelectedList" :top-config="topConfig" :visible="boxVisibility" @update:visible="boxVisibility = $event" @search-click="searchClick">
    </tiny-select-view>
  </div>
</template>

<script>
import { SelectView, Button, Modal } from '@opentiny/vue'

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
      value: ['00123450'],
      requiredSelectedList: ['00123450', '00123458', '00123459'],
      boxVisibility: false,
      menus: list,
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
    },
    searchClick(option, actionIsSuccessful) {
      if (!actionIsSuccessful) {
        // 选择操作失败，必选不能取消选择
        Modal.message(`选择项 [${option.userName} ${option.employeeNumber}] 操作失败，该必选不能取消选择`)
      }
    }
  }
}
</script>
