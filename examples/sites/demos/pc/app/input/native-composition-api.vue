<template>
  <div class="demo-input">
    <p><span>disabled</span><tiny-input v-model="input" disabled></tiny-input></p>
    <br />
    <p><span>readonly</span><tiny-input v-model="input" readonly></tiny-input></p>
    <br />
    <p>
      <span>step=2</span>
      <tiny-input type="number" v-model="inputStep" :step="2" placeholder="step 为 2"></tiny-input>
    </p>
    <br />
    <p>
      <span>min=2;max=11</span>
      <tiny-input type="number" v-model="inputMaxMin" :min="2" :max="11"></tiny-input>
    </p>
    <br />
    <p>
      <span>maxlength=5</span>
      <tiny-input v-model="input" :maxlength="5"></tiny-input>
    </p>
    <br />
    <div>
      <span>autocomplete="on"</span>
      <br /><br />
      <form>
        <tiny-input v-model="inputAutocomplete" autocomplete="on" name="email" type="email"></tiny-input>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Input as TinyInput } from '@opentiny/vue'

const input = ref('')
const inputStep = ref(2)
const inputMaxMin = ref(1)
const inputAutocomplete = ref('')
</script>

<style scoped>
.demo-input > p > span {
  display: inline-block;
  width: 130px;
}
.demo-input .tiny-input {
  width: 250px;
}
</style>
