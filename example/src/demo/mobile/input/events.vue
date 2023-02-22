<template>
  <div class="input-wrap">
    <tiny-input v-model="input" clearable @change="change" @clear="clear"></tiny-input>
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
      input: '事件测试'
    }
  },
  methods: {
    change(val) {
      console.log('当前内容：' + val)
    },
    clear() {
      console.log('clear 事件')
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
