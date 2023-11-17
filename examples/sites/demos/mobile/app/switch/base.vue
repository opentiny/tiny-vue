<template>
  <div class="switch-wrap">
    <p>默认</p>
    <tiny-switch v-model="value1" true-value="1" @change="handleChange"></tiny-switch>
    <p>小尺寸</p>
    <tiny-switch v-model="value2" @change="handleChange" small mini></tiny-switch>
    <p>不可用-开</p>
    <tiny-switch :modelValue="true" @change="handleChange" disabled></tiny-switch>
    <p>不可用-关</p>
    <tiny-switch :modelValue="false" @change="handleChange" disabled></tiny-switch>
    <p>加载状态</p>
    <tiny-switch :modelValue="true" @change="handleChangeLoading1" :loading="loading1"></tiny-switch>
    <p>加载状态-小尺寸</p>
    <tiny-switch :modelValue="true" @change="handleChangeLoading2" :loading="loading2" mini></tiny-switch>
  </div>
</template>

<script lang="jsx">
import { Switch } from '@opentiny/vue'

export default {
  components: {
    TinySwitch: Switch
  },
  data() {
    return {
      value1: '1',
      value2: true,
      loading1: false,
      loading2: false
    }
  },
  methods: {
    handleChange(val) {
      let msg = val ? '已开启' : '已关闭'
      console.log(msg)
    },
    handleChangeLoading1() {
      this.loading1 = true
      setTimeout(() => {
        this.loading1 = false
      }, 2000)
    },
    handleChangeLoading2() {
      this.loading2 = true
      setTimeout(() => {
        this.loading2 = false
      }, 2000)
    }
  }
}
</script>

<style scoped>
.switch-wrap {
  padding: 20px;
}
</style>
