<template>
  <div>
    <tiny-radio v-model="value" label="1">
      <span class="red">内容一：</span>
      <span>选项描述</span>
    </tiny-radio>
    <tiny-radio v-model="value" label="2">
      <span>内容二：</span>
      <span>选项描述</span>
    </tiny-radio>
  </div>
</template>

<script>
import { Radio } from '@opentiny/vue'

export default {
  components: {
    TinyRadio: Radio
  },
  data() {
    return {
      value: '1'
    }
  }
}
</script>

<style scoped>
.red {
  color: #ff0000;
}
</style>
