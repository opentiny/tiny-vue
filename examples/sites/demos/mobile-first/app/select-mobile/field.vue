<template>
  <div>
    <div>
      <p>值：{{ activeName1 }}</p>
      <tiny-button @click="boxVisibility1 = true">显示三个字段</tiny-button>
    </div>
    <br />
    <div>
      <p>值：{{ activeName2 }}</p>
      <tiny-button @click="boxVisibility2 = true">插槽自定义选项</tiny-button>
    </div>

    <tiny-select-mobile
      v-model="activeName1"
      title="标题1"
      :search-config="searchConfig"
      value-field="employeeNumber"
      text-field="userName"
      text-field2="employeeNumber"
      text-field3="dept"
      :show-footer="true"
      :menus="menus"
      :visible="boxVisibility1"
      @update:visible="boxVisibility1 = $event"
    ></tiny-select-mobile>

    <tiny-select-mobile
      v-model="activeName2"
      title="标题2"
      value-field="employeeNumber"
      text-field="userName"
      :search-config="searchConfig"
      :show-footer="true"
      :menus="menus"
      :visible="boxVisibility2"
      @update:visible="boxVisibility2 = $event"
    >
      <template #default="{ item, index }">
        {{ item.userName }} / {{ item.employeeNumber }} / {{ item.dept }}
      </template>
      <!--  -->
      <template #search-item="{ item, index }">
        {{ item.userName }} ||| {{ item.employeeNumber }} / {{ item.dept }}
      </template>
    </tiny-select-mobile>
  </div>
</template>

<script>
import { SelectMobile, Button } from '@opentiny/vue'

export default {
  components: {
    TinySelectMobile: SelectMobile,
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
    ]

    return {
      activeName1: '00123450',
      activeName2: [],
      boxVisibility1: false,
      boxVisibility2: false,
      searchConfig: {
        options: list,
        openSearchSlot: true
      },
      menus: list
    }
  },
  methods: {}
}
</script>
