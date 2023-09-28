<template>
  <tiny-transfer
    v-model="value"
    :data="data"
    @change="change"
    @left-check-change="leftCheckChange"
    @right-check-change="rightCheckChange"
  ></tiny-transfer>
</template>

<script lang="jsx">
import { Transfer, Modal } from '@opentiny/vue'

export default {
  components: {
    TinyTransfer: Transfer
  },
  data() {
    const generateData = () => {
      const data = []

      for (let i = 0; i <= 15; i++) {
        data.push({
          key: i,
          label: `备选项 ${i}`,
          disabled: i % 4 === 0
        })
      }

      return data
    }

    return {
      data: generateData(),
      value: [1, 4]
    }
  },
  methods: {
    change(value, move, keyArray) {
      Modal.message({
        message: 'change 事件，当前值：' + value + '，方向：' + move + '，移动的数据：' + keyArray,
        status: 'info'
      })
    },
    leftCheckChange(checked, statusChanged) {
      Modal.message({
        message: 'left-check-change 事件，被选中：' + checked + '，选中状态发生变化：' + statusChanged,
        status: 'info'
      })
    },
    rightCheckChange(checked, statusChanged) {
      Modal.message({
        message: 'right-check-change 事件，被选中：' + checked + '，选中状态发生变化：' + statusChanged,
        status: 'info'
      })
    }
  }
}
</script>
