<template>
  <div>
    <tiny-button @click="fn1" type="primary"> 同步数据滚动 </tiny-button>
    <tiny-button @click="fn2" type="primary"> 异步请求滚动 </tiny-button>
    <p>值：{{ value }}</p>
    <tiny-select-view
      v-model="value"
      multiple
      :menus="menus"
      value-field="employeeNumber"
      text-field="userName"
      text-field2="employeeNumber"
      text-field3="dept"
      title="选择人员"
      :search-config="searchConfig"
      :infinite-scroll="infiniteScroll"
      :visible="boxVisibility"
      @update:visible="boxVisibility = $event"
    >
    </tiny-select-view>

    <tiny-select-view
      ref="selectViewRef"
      v-model="value"
      multiple
      :menus="menus"
      value-field="employeeNumber"
      text-field="userName"
      text-field2="employeeNumber"
      text-field3="dept"
      title="选择人员"
      :search-config="searchConfig"
      :infinite-scroll="infiniteScroll"
      :visible="boxVisibility2"
      @update:visible="boxVisibility2 = $event"
    >
    </tiny-select-view>
  </div>
</template>

<script>
import { SelectView, Button } from '@opentiny/vue'

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

export default {
  components: {
    TinySelectView: SelectView,
    TinyButton: Button
  },
  data() {
    return {
      value: ['00123450'],
      boxVisibility: false,
      boxVisibility2: false,
      menus: list,
      infiniteScroll: {
        load: this.load1,
        delay: 200,
        disabled: false,
        distance: 0,
        immediate: true,
        loadingText: '加载中...(●`◡`●)'
      },
      searchConfig: {
        searchMethod: null
      }
    }
  },
  methods: {
    fn1() {
      this.boxVisibility = true
      this.menus = this.menus.slice(0, 20)
      this.infiniteScroll.load = this.load1
    },
    fn2() {
      this.boxVisibility2 = true
      this.infiniteScroll.load = this.load2
    },
    load1() {
      const options = this.menus
      const len = options.length

      if (len > 200) {
        return
      }

      const list = Array.from({ length: 20 }).map((item, index) => ({
        employeeNumber: ('000012340' + (len + index + 1)).slice(-8),
        userName: `机器人${len + index + 1}号`,
        dept: `机器人部门${len + index + 1}`
      }))

      console.log('list', list)
      this.menus = options.concat(list)
    },
    load2({ input, options }) {
      if (input) {
        return
      }

      const len = options.length

      return new Promise((resolve) => {
        const list = Array.from({ length: 20 }).map((item, index) => ({
          employeeNumber: ('000012340' + (len + index + 1)).slice(-8),
          userName: `机器人${len + index + 1}号`,
          dept: `机器人部门${len + index + 1}`
        }))

        console.log('list', list)

        setTimeout(() => {
          resolve(list)
        }, 1000)
      })
    }
  }
}
</script>
