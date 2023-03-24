<template>
  <div class="input-wrap">
    <tiny-input v-model="input" type="textarea" autosize autofocus placeholder="请输入内容"></tiny-input>
    <tiny-input v-model="input" type="textarea" :autosize="{ minRows: 2, maxRows: 3 }" placeholder="请输入内容"></tiny-input>
  </div>
</template>

<script lang="jsx">
import { Input } from '@opentiny/vue'

export default {
  components: {
    TinyInput: Input
  },
  data() {
    return {
      input: ''
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
.input-wrap .tiny-mobile-textarea + .tiny-mobile-textarea {
  margin-top: 24px;
}
</style>
