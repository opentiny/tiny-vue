<template>
  <div class="demo-input">
    <tiny-input ref="input" v-model="input" placeholder="使输入框先失去焦点"></tiny-input>
    <br />
    <br />
    <tiny-button @click="click">输入框获取焦点</tiny-button>
  </div>
</template>

<script>
import { TinyInput, TinyButton } from '@opentiny/vue'

export default {
  components: {
    TinyInput,
    TinyButton
  },
  data() {
    return {
      input: ''
    }
  },
  methods: {
    click() {
      this.$refs.input.focus()
    }
  }
}
</script>

<style scoped>
.demo-input .tiny-input {
  width: 250px;
}
</style>
