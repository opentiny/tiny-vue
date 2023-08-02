<template>
  <div class="demo-input">
    <tiny-input v-model="input" placeholder="先获取焦点后再失去焦点" @blur="blur"></tiny-input>
  </div>
</template>

<script lang="jsx">
import { Input, Modal } from '@opentiny/vue'

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
    blur() {
      Modal.message('blur')
    }
  }
}
</script>

<style scoped>
.demo-input .tiny-input {
  width: 250px;
}
</style>
