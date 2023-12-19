<template>
  <div class="switch-wrap">
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
      loading1: false,
      loading2: false
    }
  },
  methods: {
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
