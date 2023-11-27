<template>
  <div class="demo-form">
    <div class="scroll-parent">
      <tiny-form ref="form" :model="createData" label-width="60px" :popper-options="{ bubbling: true }">
        <tiny-form-item label="姓名" prop="name" required>
          <tiny-input v-model="createData.name"> </tiny-input>
        </tiny-form-item>
        <tiny-form-item label="昵称" prop="nickname" required>
          <tiny-input v-model="createData.nickname"> </tiny-input>
        </tiny-form-item>
        <tiny-form-item label="描述" prop="desc" required>
          <tiny-input v-model="createData.desc" type="textarea"> </tiny-input>
        </tiny-form-item>
        <tiny-form-item>
          <tiny-button type="primary" @click="submitClick"> 提交 </tiny-button>
        </tiny-form-item>
      </tiny-form>
    </div>
  </div>
</template>

<script>
import { Form, FormItem, Input, Button } from '@opentiny/vue'

export default {
  components: {
    TinyForm: Form,
    TinyFormItem: FormItem,
    TinyInput: Input,
    TinyButton: Button
  },
  data() {
    return {
      createData: {
        name: '',
        nickname: '',
        desc: ''
      }
    }
  },
  methods: {
    submitClick() {
      this.$refs.form.validate(() => {
        // empty
      })
    }
  }
}
</script>

<style scoped>
.demo-form {
  width: 380px;
}
.scroll-parent {
  height: 200px;
  overflow: auto;
}
</style>
