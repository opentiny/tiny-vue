<template>
  <div class="demo-form">
    <tiny-form :model="state" :rules="rules">
      <tiny-form-item label="HTML" prop="value0">
        <tiny-input :maxLength="3" v-model="state.value0"></tiny-input>
      </tiny-form-item>
      <tiny-form-item label="默认" prop="value1">
        <tiny-input v-model="state.value1"></tiny-input>
      </tiny-form-item>
      <tiny-form-item label="自定义" prop="value2">
        <tiny-input v-model="state.value2"></tiny-input>
      </tiny-form-item>
    </tiny-form>
  </div>
</template>

<script>
import { Form as TinyForm, FormItem as TinyFormItem, Input as TinyInput } from '@opentiny/vue'

export default {
  components: {
    TinyForm,
    TinyFormItem,
    TinyInput
  },
  data() {
    return {
      state: {
        value0: '',
        value1: '',
        value2: ''
      },
      rules: {
        value1: [{ max: 3 }],
        value2: [
          {
            max: 4,
            regular(val) {
              return val.length
            }
          }
        ]
      }
    }
  }
}
</script>

<style scoped>
.demo-form {
  width: 380px;
}
</style>
