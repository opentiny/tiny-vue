<template>
  <div class="switch-wrap">
    <tiny-switch :value="value" @change="handleChange"></tiny-switch>
  </div>
</template>

<script>
import { Switch } from '@opentiny/vue'

export default {
  components: {
    TinySwitch: Switch
  },
  data() {
    return {
      value: true
    }
  },
  methods: {
    handleChange(val) {
      let msg = val ? '已开启' : '已关闭'
      console.log(msg)
    }
  }
}
</script>

<style scoped>
.switch-wrap {
  padding: 20px;
}
</style>
