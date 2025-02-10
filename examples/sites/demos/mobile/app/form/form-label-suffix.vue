<template>
  <div class="demo-form">
    <div class="page__hd">
      <h1 class="page__title">Form</h1>
      <p class="page__desc">表单（设置标签宽度）</p>
    </div>
    <div class="demo-form-padds">
      <tiny-form
        ref="ruleFormRef"
        :model="createData"
        :rules="rules"
        label-width="100px"
        label-position="left"
        label-suffix="自定义后缀"
      >
        <tiny-form-item label="优秀" prop="users">
          <tiny-input v-model="createData.users" placeholder="请输入内容" type="form"></tiny-input>
        </tiny-form-item>
        <tiny-form-item label="优秀">
          <tiny-input
            v-model="createData.user"
            is-select
            :select-menu="menus"
            placeholder="请输入内容"
            type="form"
          ></tiny-input>
        </tiny-form-item>
        <tiny-form-item>
          <tiny-button type="primary" @click="handleSubmit('ruleForm')">提交</tiny-button>
        </tiny-form-item>
      </tiny-form>
    </div>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { TinyForm, TinyFormItem, TinyInput, TinyButton, TinyModal } from '@opentiny/vue-mobile'

const menus = ref([
  {
    id: 1,
    label: '我是小花,我是小花,我是小花,我是小花,我是小花,我是小花,我是小花'
  },
  {
    id: 2,
    label: '我是小树'
  },
  {
    id: 3,
    label: '我是小草'
  },
  {
    id: 4,
    label: '我是小叶',
    warn: true
  }
])
const createData = ref({
  users: '',
  user: ''
})
const rules = ref({
  users: [{ required: true, message: '必填', trigger: 'change' }]
})
const formNameRef = ref()

function gev() {
  console.log(createData.value.users)
}

function handleSubmit(formName) {
  // FIXIME $refs自动转换失败，请手工修改
$refs[formName].validate((valid) => {
    if (valid) {
      TinyModal.alert('提交成功')
    }
  })
}
</script>

<style scoped>
.page__hd {
  padding: 40px;
}
.page__title {
  font-weight: 400;
  font-size: 21px;
  text-align: left;
}
.demo-form {
  height: 100%;
  overflow: auto;
  padding-right: 15px;
  padding-left: 16px;
  background: #f4f4f4;
}
.demo-form-padds {
  padding-right: 15px;
  padding-left: 15px;
  background: white;
  margin-bottom: 15px;
}
</style>

<style>
.demo-form-padds .tiny-mobile-input-form__input {
  text-align: right;
}
</style>
