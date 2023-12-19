<template>
  <div class="demo-input-methods">
    <section>
      <tiny-button plain @click="focus">focus</tiny-button>
      <tiny-button plain @click="blur">blur</tiny-button>
      <tiny-input ref="inputRef" v-model="value" placeholder="Please input"></tiny-input>
    </section>
    <section>
      <tiny-button plain @click="select">select</tiny-button>
      <tiny-input ref="selectRef" v-model="selectValue" placeholder="Please input"></tiny-input>
    </section>
  </div>
</template>

<script>
import { Input, Button } from '@opentiny/vue'

export default {
  components: {
    TinyInput: Input,
    TinyButton: Button
  },
  data() {
    return {
      value: '',
      selectValue: '123456'
    }
  },
  methods: {
    select() {
      this.$refs.selectRef.select()
    },
    blur() {
      this.$refs.inputRef.blur()
    },
    focus() {
      this.$refs.inputRef.focus()
    }
  }
}
</script>

<style scoped>
.demo-input-methods {
  height: 100%;
  padding: 20px 16px;
  background: #f5f5f5;
}

.demo-input-methods [class^='tiny'] {
  margin: 5px;
}
</style>
