<template>
  <p>1、数值精度</p>
  <tiny-numeric v-model="value" :precision="precision"></tiny-numeric>
  <p>2、数值格式</p>
  <tiny-numeric style="width: 300px" v-model="value1" :format="format"></tiny-numeric>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { Numeric as TinyNumeric } from '@opentiny/vue'

const value = ref(1)
const precision = ref(2)
const value1 = ref(123456879.445566)
const format = reactive({
  zeroize: true, // 是否保留多余的0字符
  fraction: 4, // 保留小数位数
  rounding: 0, // 舍入点
  prefix: '$', // 前置标识
  groupSize: 3, // 整数部分分组间隔，即第一个分组位数
  secondaryGroupSize: 2, // 整数部分第二级分组间隔，不设置或为0时 自动取groupSize
  groupSeparator: ',', // 整数部分分组分隔符
  decimalSeparator: '.', // 小数点符号
  fractionGroupSize: 0, // 小数部分分组间隔
  fractionGroupSeparator: '\xA0', // 小数分组分隔符
  suffix: '@' // 后置标识
})
</script>
