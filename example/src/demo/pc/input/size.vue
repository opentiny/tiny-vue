<template>
  <div class="demo-input">
    <tiny-input v-model="input" placeholder="size 为默认值"></tiny-input
    ><br /><br />
    <tiny-input
      v-model="input"
      size="medium"
      placeholder="size 为 medium"
    ></tiny-input
    ><br /><br />
    <tiny-input
      v-model="input"
      size="small"
      placeholder="size 为 small"
    ></tiny-input
    ><br /><br />
    <tiny-input
      v-model="input"
      size="mini"
      placeholder="size 为 mini"
    ></tiny-input>
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
      input: ''
    }
  }
}
</script>

<style scoped>
.demo-input .tiny-input {
  width: 250px;
}
</style>
