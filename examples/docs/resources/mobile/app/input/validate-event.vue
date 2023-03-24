<template>
  <div class="input-wrap event-validate-demo1">
    <div class="page__hd">
      <tiny-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-form">
        <tiny-form-item label="活动名称" prop="name">
          <tiny-input v-model="ruleForm.name" validate-event></tiny-input>
        </tiny-form-item>
      </tiny-form>
    </div>
  </div>
</template>

<script lang="jsx">
import { Input, Form, FormItem } from '@opentiny/vue'

export default {
  components: {
    TinyInput: Input,
    TinyForm: Form,
    TinyFormItem: FormItem
  },
  data() {
    return {
      ruleForm: {
        name: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'change' }
        ]
      }
    }
  }
}
</script>

<style>
.page__hd {
  padding: 40px;
}
.page__title {
  font-weight: 400;
  font-size: 21px;
  text-align: left;
}
.page__desc {
  margin-top: 5px;
  color: #888;
  font-size: 14px;
  text-align: left;
}
.page__text {
  padding-right: 16px;
  padding-left: 16px;
  margin-top: 0.77em;
  margin-bottom: 0.3em;
  color: #666;
  font-size: 14px;
}
.input-wrap {
  height: 100%;
  background: #f4f4f4;
}
.event-validate-demo1 .tiny-mobile-input__inner {
  margin-left: 85px;
}
</style>
