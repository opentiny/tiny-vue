<template>
  <div class="switch-wrap">
    <p>默认</p>
    <tiny-switch v-model="value1" true-value="1" @change="handleChange"></tiny-switch>
    <span class="status">{{ status }}</span>
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
      status: '已开启'
    }
  },
  methods: {
    handleChange(val) {
      this.status = val ? '已开启' : '已关闭'
    }
  }
}
</script>

<style scoped>
.switch-wrap {
  padding: 20px;
}

.status {
  margin-left: 20px;
}
</style>
