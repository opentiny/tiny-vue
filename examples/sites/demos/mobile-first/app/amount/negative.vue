<template>
  <div class="tiny-demo">
    <tiny-form ref="ruleForm" :model="createData" label-width="100px">
      <tiny-form-item label="支持负值" prop="value1">
        <tiny-amount v-model="createData.value1" :negative="true"></tiny-amount>
      </tiny-form-item>
      <tiny-form-item label="不支持负值" prop="value2">
        <tiny-amount v-model="createData.value2" :negative="false"></tiny-amount>
      </tiny-form-item>
    </tiny-form>
  </div>
</template>

<script>
import { Amount, Form, FormItem } from '@opentiny/vue'

export default {
  components: {
    TinyAmount: Amount,
    TinyForm: Form,
    TinyFormItem: FormItem
  },
  data() {
    return {
      createData: {
        value1: -88.88,
        value2: -88.88
      }
    }
  }
}
</script>
