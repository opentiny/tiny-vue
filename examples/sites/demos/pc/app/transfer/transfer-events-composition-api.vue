<template>
  <tiny-transfer
    v-model="value"
    :data="data"
    @change="change"
    @left-check-change="leftCheckChange"
    @right-check-change="rightCheckChange"
  ></tiny-transfer>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Transfer as TinyTransfer, Modal } from '@opentiny/vue'

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

const data = ref(generateData())
const value = ref([1, 4])

function change(value, move, keyArray) {
  Modal.message({
    message: 'change 事件，当前值：' + value + '，方向：' + move + '，移动的数据：' + keyArray,
    status: 'info'
  })
}

function leftCheckChange(checked, statusChanged) {
  Modal.message({
    message: 'left-check-change 事件，被选中：' + checked + '，选中状态发生变化：' + statusChanged,
    status: 'info'
  })
}

function rightCheckChange(checked, statusChanged) {
  Modal.message({
    message: 'right-check-change 事件，被选中：' + checked + '，选中状态发生变化：' + statusChanged,
    status: 'info'
  })
}
</script>
