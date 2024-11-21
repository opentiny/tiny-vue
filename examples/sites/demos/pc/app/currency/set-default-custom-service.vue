<template>
  <div class="demo-currency-class">
    <tiny-currency
      v-model="value"
      placeholder="请选择"
      set-default
      :fetch-default-currency="fetchDefaultCurrency"
      :set-default-currency="setDefaultCurrency"
      @change="change"
    ></tiny-currency>
  </div>
</template>

<script>
import { TinyCurrency, TinyModal } from '@opentiny/vue'

export default {
  components: {
    TinyCurrency
  },
  data() {
    return {
      value: '',
      defaultCurrency: 'VUV'
    }
  },
  methods: {
    change(value) {
      TinyModal.message({ message: `当前值为 ${value}`, status: 'info' })
    },
    fetchDefaultCurrency() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(this.defaultCurrency)
        }, 500)
      })
    },
    setDefaultCurrency(value) {
      return new Promise((resolve) => {
        setTimeout(() => {
          this.defaultCurrency = value
          TinyModal.message({ message: `设置默认值成功，值为${value} `, status: 'success' })
          resolve(value)
        }, 500)
      })
    }
  },
  created() {
    console.log(this.$service?.base.getEnvInfo())
  }
}
</script>

<style scoped>
.demo-currency-class {
  width: 280px;
}
</style>
