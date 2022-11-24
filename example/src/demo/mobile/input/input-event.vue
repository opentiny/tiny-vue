<template>
  <div class="input-wrap">
    <tiny-input
      v-model="value"
      clearable
      @blur="blur"
      @focus="focus"
      @input="input"
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
      value: '事件测试'
    }
  },
  methods: {
    blur() {
      console.log('blur 事件')
    },
    focus() {
      console.log('focus 事件')
    },
    input(value) {
      console.log('input' + value)
    }
  }
}
</script>
<style>
.input-wrap {
  padding-top: 20px;
  height: 100%;
  background: #f4f4f4;
}
</style>
