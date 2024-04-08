<template>
  <div class="demo-input">
    <div class="demo-input-item">
      <span>autofocus</span>
      <tiny-input v-model="autofocusVal" autofocus></tiny-input>
    </div>
    <div class="demo-input-item">
      <span>readonly</span>
      <tiny-input v-model="input" readonly></tiny-input>
    </div>
    <div class="demo-input-item">
      <span>autocomplete="on"</span>
      <form>
        <tiny-input v-model="inputAutocomplete" autocomplete="on" name="email" type="email"></tiny-input>
      </form>
    </div>
    <div class="demo-input-item">
      <span>step=2</span>
      <tiny-input type="number" v-model="inputStep" :step="2" placeholder="step 为 2"></tiny-input>
    </div>
    <div class="demo-input-item">
      <span>name</span>
      <tiny-input v-model="username" name="username"></tiny-input>
    </div>
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
      autofocusVal: '',
      input: 'readonly',
      inputStep: 2,
      inputAutocomplete: '',
      username: ''
    }
  }
}
</script>

<style scoped>
.demo-input {
  padding: 20px 16px;
  height: 100%;
  background: #f5f5f5;
}

.demo-input .demo-input-item {
  margin-bottom: 12px;
}
</style>
