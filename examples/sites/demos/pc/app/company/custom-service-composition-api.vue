<template>
  <tiny-company
    v-model="value"
    placeholder="请输入"
    :fetch-company="getCompanyData"
    :fields="fields"
    :max="2"
    @change="change"
    @clear="clear"
    is-drop-inherit-width
    clearable
  ></tiny-company>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Company as TinyCompany, Modal } from '@opentiny/vue'

const fields = ref({
  textField: 'name',
  valueField: 'id'
})
const value = ref('')

function getCompanyData() {
  return new Promise((resolve) => {
    resolve([
      {
        id: '0001',
        name: '公司一'
      },
      {
        id: '0002',
        name: '公司二'
      },
      {
        id: '0003',
        name: '公司三'
      },
      {
        id: '0004',
        name: '公司四'
      }
    ])
  })
}

function clear() {
  Modal.message({ message: 'clear:触发了', status: 'info' })
}

function change(value) {
  Modal.message({ message: `change:${value}`, status: 'info' })
}
</script>
