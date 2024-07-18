<template>
  <div>
    <p>数值精度:</p>
    <tiny-numeric v-model="value" :precision="precision" class="numeric-class"></tiny-numeric>
    <p>数值格式:</p>
    <tiny-numeric style="width: 300px" v-model="value1" :format="format" class="numeric-class"></tiny-numeric>
  </div>
</template>

<script lang="ts">
import { Numeric } from '@opentiny/vue'

export default {
  components: {
    TinyNumeric: Numeric
  },
  data() {
    return {
      value: 1,
      precision: 2,
      value1: 123456879.445566,
      format: {
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
      }
    }
  }
}
</script>

<style scoped>
.numeric-class {
  margin: 4px 0px;
}
p {
  font-size: 14px;
  line-height: 1.5;
  padding: 16px 0;
}
</style>
