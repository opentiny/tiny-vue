<template>
  <div class="demo-input">
    <tiny-input v-model="input" placeholder="请输入内容" @change="change"></tiny-input>
  </div>
</template>

<script>
import { TinyInput, TinyModal } from '@opentiny/vue'

export default {
  components: {
    TinyInput
  },
  data() {
    return {
      input: ''
    }
  },
  methods: {
    change() {
      TinyModal.message('change')
    }
  }
}
</script>

<style scoped>
.demo-input .tiny-input {
  width: 250px;
}
</style>
