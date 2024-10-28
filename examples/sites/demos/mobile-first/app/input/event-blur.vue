<template>
  <div class="demo-input">
    <tiny-input v-model="input" placeholder="先获取焦点后再失去焦点" @blur="blur"></tiny-input>
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
    blur() {
      TinyModal.message('blur')
    }
  }
}
</script>

<style scoped>
.demo-input .tiny-input {
  width: 250px;
}
</style>
