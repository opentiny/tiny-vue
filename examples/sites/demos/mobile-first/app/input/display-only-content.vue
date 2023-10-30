<template>
  <div class="inline-block">
    <tiny-input
      class="w-full"
      v-model="input"
      display-only
      display-only-content="内容只读"
      placeholder="先获取焦点后再失去焦点"
    ></tiny-input>
    <br />
    <tiny-input class="w-full" v-model="input1" display-only placeholder="先获取焦点后再失去焦点"></tiny-input>
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
      input: '',
      input1: '只读态'
    }
  }
}
</script>
