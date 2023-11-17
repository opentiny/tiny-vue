<template>
  <tiny-checkbox-group v-model="checked" @change="valueChange">
    <tiny-checkbox-button v-for="item in list" :label="item.title" :key="item.id"></tiny-checkbox-button>
  </tiny-checkbox-group>
</template>

<script>
import { CheckboxButton, CheckboxGroup, Modal } from '@opentiny/vue'

export default {
  components: {
    TinyCheckboxButton: CheckboxButton,
    TinyCheckboxGroup: CheckboxGroup
  },
  data() {
    return {
      list: [],
      checked: []
    }
  },
  created() {
    this.getData().then((data) => {
      this.list = data
      this.checked = data.filter((item) => item.checked).map((item) => item.title)
    })
  },
  methods: {
    valueChange(val) {
      Modal.message({
        message: `当前选择：${JSON.stringify(val)}`,
        status: 'info'
      })
    },
    /**
     * 模拟服务请求
     */
    getData() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve([
            {
              title: '北京',
              checked: true,
              id: 1
            },
            {
              title: '上海',
              checked: false,
              id: 2
            },
            {
              title: '广州',
              checked: true,
              id: 3
            },
            {
              title: '深圳',
              checked: false,
              id: 4
            }
          ])
        }, 800)
      })
    }
  }
}
</script>
