<template>
  <div class="input-wrap">
    <tiny-input placeholder="请输入内容" v-model="input">
      <template #prefix>
        <div style="color: red">Http</div>
      </template>
      <template #suffix>
        <div style="color: red">com</div>
      </template>
    </tiny-input>
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
.tiny-mobile-input-prefix .tiny-mobile-input__inner {
  padding-left: 45px;
  padding-right: 28px;
}
</style>
