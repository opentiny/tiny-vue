<template>
  <div class="demo-input">
    <tiny-input type="textarea" v-model="input" display-only popup-more></tiny-input>
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
      input:
        '表单文本域开启只读模式，文本内容超过5行自动隐藏。表单文本域开启只读模式，文本内容超过5行自动隐藏。表单文本域开启只读模式，文本内容超过5行自动隐藏。表单文本域开启只读模式，文本内容超过5行自动隐藏。表单文本域开启只读模式，文本内容超过5行自动隐藏'
    }
  }
}
</script>

<style scoped>
.demo-input .tiny-textarea {
  width: 260px;
}
</style>
