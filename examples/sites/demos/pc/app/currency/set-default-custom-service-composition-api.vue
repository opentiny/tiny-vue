<template>
  <tiny-currency
    v-model="value"
    placeholder="请选择"
    set-default
    :fetch-default-currency="fetchDefaultCurrency"
    :set-default-currency="setDefaultCurrency"
    @change="change"
  ></tiny-currency>
</template>

<script setup>
import { ref, getCurrentInstance } from 'vue'
import { Currency as TinyCurrency, Modal } from '@opentiny/vue'

const value = ref('')
const defaultCurrency = ref('VUV')

const change = (value) => {
  Modal.message({ message: `当前值为 ${value}`, status: 'info' })
}

const fetchDefaultCurrency = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(defaultCurrency.value)
    }, 500)
  })
}

const setDefaultCurrency = (value) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      defaultCurrency.value = value
      Modal.message({ message: `设置默认值成功，值为${value} `, status: 'success' })
      resolve(value)
    }, 500)
  })
}
const instance = getCurrentInstance()
const { $service } = instance.appContext.config.globalProperties
console.log($service?.base.getEnvInfo())
</script>
