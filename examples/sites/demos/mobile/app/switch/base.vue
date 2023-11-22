<template>
  <div class="switch-wrap">
    <p>默认</p>
    <tiny-switch v-model="value1" true-value="1"></tiny-switch>
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
      value1: '1'
    }
  }
}
</script>

<style scoped>
.switch-wrap {
  padding: 20px;
}
</style>
