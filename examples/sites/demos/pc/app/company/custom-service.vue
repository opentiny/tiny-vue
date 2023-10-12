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

<script lang="jsx">
import { Company, Modal } from '@opentiny/vue'

export default {
  components: {
    TinyCompany: Company
  },
  data() {
    return {
      fields: {
        textField: 'name',
        valueField: 'id'
      },
      value: ''
    }
  },
  methods: {
    getCompanyData() {
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
    },
    clear() {
      Modal.message({ message: 'clear:触发了', status: 'info' })
    },
    change(value) {
      Modal.message({ message: `change:${value}`, status: 'info' })
    }
  }
}
</script>
