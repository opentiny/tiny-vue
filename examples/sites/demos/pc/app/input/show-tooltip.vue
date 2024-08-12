<template>
  <div class="demo-input">
    是否悬浮提示：<tiny-switch v-model="showTooltip"></tiny-switch>
    <tiny-input v-model="input" display-only :show-tooltip="showTooltip"></tiny-input>
  </div>
</template>

<script>
import { Input, Switch } from '@opentiny/vue'

export default {
  components: {
    TinyInput: Input,
    TinySwitch: Switch
  },
  data() {
    return {
      showTooltip: false,
      input:
        '内容很多内容很多内容很多内容很多内容很多内容很多内容很多内容很多内容很多内容很多内容很多内容很多内容很多内容很多内容很多内容很多内容很多内容很多内容很多'
    }
  }
}
</script>

<style scoped>
.demo-input {
  width: 200px;
  display: inline-block;
}
.tiny-input {
  margin-top: 12px;
}
</style>
