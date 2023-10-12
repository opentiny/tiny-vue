<template>
  <div class="input-wrap">
    <tiny-input placeholder="请输入内容" v-model="input">
      <template #prepend>Http://</template>
    </tiny-input>
    <br /><br />
    <tiny-input placeholder="请输入内容" v-model="input">
      <template #append>.com</template>
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
</style>
