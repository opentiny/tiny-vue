<template>
  <div class="display-only">
    <p class="demp-input">输入框</p>
    <p>
      <label>display-only & display-only-content：</label>
      <tiny-input v-model="input" display-only display-only-content="display-only-content 的内容"></tiny-input>
    </p>
    <p>
      <label>display-only：</label>
      <tiny-input v-model="input1" display-only></tiny-input>
    </p>
    <br />

    <p class="demp-input">文本域</p>
    <p class="demp-input">
      <label>display-only：</label>
      <tiny-input class="demp-input-dis" v-model="input1" type="textarea" display-only></tiny-input>
    </p>
    <p>
      <label>display-only&autosize：</label>
      <tiny-input class="demp-input-dis" v-model="input1" type="textarea" display-only autosize></tiny-input>
    </p>
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
      input: 'value 的内容',
      input1: 'value 的内容'
    }
  }
}
</script>

<style lang="less" scoped>
.display-only .tiny-input {
  display: inline-block;
  width: auto;
}
.demp-input {
  margin-bottom: 8px;
}
.demp-input-dis {
  margin-top: 8px;
}
</style>
