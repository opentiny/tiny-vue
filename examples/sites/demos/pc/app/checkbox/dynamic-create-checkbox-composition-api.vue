<template>
  <tiny-checkbox-group v-model="checked" @change="valueChange">
    <tiny-checkbox-button v-for="item in list" :label="item.title" :key="item.id"></tiny-checkbox-button>
  </tiny-checkbox-group>
</template>

<script setup>
import { ref } from 'vue'
import { CheckboxButton as TinyCheckboxButton, CheckboxGroup as TinyCheckboxGroup, Modal } from '@opentiny/vue'

const list = ref([])
const checked = ref([])

getData().then((data) => {
  list.value = data
  checked.value = data.filter((item) => item.checked).map((item) => item.title)
})

function valueChange(val) {
  Modal.message({
    message: `当前选择：${JSON.stringify(val)}`,
    status: 'info'
  })
}

/**
 * 模拟服务请求
 */
function getData() {
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
</script>
