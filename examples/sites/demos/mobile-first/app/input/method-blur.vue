<template>
  <div class="demo-input">
    <tiny-input
      ref="input"
      v-model="input"
      placeholder="通过 input 事件调用 blur()，请输入"
      @input="enableBlur"
    ></tiny-input>
  </div>
</template>

<script>
import { Input } from '@opentiny/vue'

export default {
  components: {
    TinyInput: Input
  },
  data() {
    return {
      input: ''
    }
  },
  methods: {
    enableBlur() {
      this.$refs.input.blur()
    }
  }
}
</script>

<style scoped>
.demo-input .tiny-input {
  width: 250px;
}
</style>
