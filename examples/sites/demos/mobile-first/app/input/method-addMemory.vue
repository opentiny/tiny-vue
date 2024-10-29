<template>
  <div class="demo-input">
    <h3>input:{{ input }}</h3>
    <tiny-input
      ref="textMemory"
      v-model="input"
      name="textMemory"
      placeholder="请输入内容"
      @change="addMemory"
    ></tiny-input>
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
    addMemory(val) {
      TinyModal.message({ message: val, status: 'success' })
      this.$refs.textMemory.addMemory(val)
    }
  }
}
</script>

<style scoped>
.demo-input {
  height: 300px;
}

.demo-input .tiny-input {
  width: 250px;
}
</style>
