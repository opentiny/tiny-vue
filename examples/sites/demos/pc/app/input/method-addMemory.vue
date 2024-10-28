<template>
  <div class="demo-input">
    <tiny-input
      ref="textMemory"
      v-model="input"
      name="textMemory"
      placeholder="Please input"
      :memory-space="3"
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
.demo-input .tiny-input {
  width: 250px;
  margin: 5px 0;
}
</style>
