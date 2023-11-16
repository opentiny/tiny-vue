<template>
  <tiny-form :inline="true" label-suffix="：" size="small">
    <tiny-form-item label="数字">
      <tiny-numeric v-model="formData.quantity"></tiny-numeric>
    </tiny-form-item>
    <tiny-form-item label="单选">
      <tiny-radio v-model="formData.sex" label="1"> 男 </tiny-radio>
      <tiny-radio v-model="formData.sex" label="2" text="女"></tiny-radio>
    </tiny-form-item>
  </tiny-form>
</template>

<script>
import { Form, FormItem, Numeric, Radio } from '@opentiny/vue'

export default {
  components: {
    TinyForm: Form,
    TinyFormItem: FormItem,
    TinyNumeric: Numeric,
    TinyRadio: Radio
  },
  data() {
    return {
      formData: {
        quantity: '',
        sex: ''
      }
    }
  }
}
</script>

<style scoped>
#form .tiny-input {
  width: 300px;
}
</style>
