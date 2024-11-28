<template>
  <div>
    <tiny-config-provider :design="design">
      <tiny-form :model="formData" class="demo-form">
        <tiny-form-item label="年龄" prop="age" required>
          <tiny-numeric v-model="formData.age"></tiny-numeric>
        </tiny-form-item>
        <tiny-form-item label="姓名" prop="name" required>
          <tiny-input v-model="formData.name"></tiny-input>
        </tiny-form-item>
      </tiny-form>
    </tiny-config-provider>
  </div>
</template>

<script>
import { TinyConfigProvider, TinyForm, TinyFormItem, TinyInput, TinyNumeric } from '@opentiny/vue'

export default {
  components: {
    TinyConfigProvider,
    TinyForm,
    TinyFormItem,
    TinyInput,
    TinyNumeric
  },
  data() {
    return {
      design: {
        name: 'smb', // 设计规范名称
        version: '1.0.0', // 设计规范版本号
        components: {
          Form: {
            hideRequiredAsterisk: true
          }
        }
      },
      formData: {
        name: '',
        age: ''
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
