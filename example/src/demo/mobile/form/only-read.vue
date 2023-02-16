<template>
  <div class="demo-form">
    <div class="page__hd">
      <h1 class="page__title">Form</h1>
      <p class="page__desc">表单（纯展示）</p>
    </div>
    <div class="padds">
      <tiny-form
        ref="ruleForm"
        :model="createData"
        :rules="rules"
        label-width="120"
      >
        <tiny-form-item label="个人交养老险" prop="users">
          <tiny-input
            v-model="createData.users"
            placeholder="请输入内容"
            type="form"
            readonly
          ></tiny-input>
        </tiny-form-item>
        <tiny-form-item label="个人交医疗险" prop="one">
          <tiny-input
            v-model="createData.one"
            placeholder="请输入内容"
            type="form"
            readonly
          ></tiny-input>
        </tiny-form-item>
        <tiny-form-item label="个人交失业险" prop="two">
          <tiny-input
            v-model="createData.two"
            placeholder="请输入内容"
            type="form"
            readonly
          ></tiny-input>
        </tiny-form-item>
        <tiny-form-item label="个人交住房金" prop="three">
          <tiny-input
            v-model="createData.three"
            placeholder="请输入内容"
            type="form"
            readonly
          ></tiny-input>
        </tiny-form-item>
      </tiny-form>
    </div>
    <div class="padds">
      <tiny-form
        ref="ruleForm"
        :model="createData"
        :rules="rules"
        label-width="120"
      >
        <tiny-form-item label="个人交养老险" prop="users">
          <tiny-input
            v-model="createData.users"
            placeholder="请输入内容"
            type="form"
            readonly
            vertical
          ></tiny-input>
        </tiny-form-item>
        <tiny-form-item label="个人交医疗险" prop="one">
          <tiny-input
            v-model="createData.one"
            placeholder="请输入内容"
            type="form"
            readonly
            vertical
          ></tiny-input>
        </tiny-form-item>
        <tiny-form-item label="个人交失业险" prop="two">
          <tiny-input
            v-model="createData.two"
            placeholder="请输入内容"
            type="form"
            readonly
            vertical
          ></tiny-input>
        </tiny-form-item>
        <tiny-form-item label="个人交住房金" prop="three">
          <tiny-input
            v-model="createData.three"
            placeholder="请输入内容"
            type="form"
            readonly
            vertical
          ></tiny-input>
        </tiny-form-item>
      </tiny-form>
    </div>
    <div class="padds">
      <tiny-form
        ref="ruleForm"
        :model="createData"
        :rules="rules"
        label-width="120"
        label-position="top"
      >
        <tiny-form-item label="个人交养老险" prop="users">
          <tiny-input
            v-model="createData.users"
            placeholder="请输入内容"
            type="form"
            readonly
            vertical
          ></tiny-input>
        </tiny-form-item>
        <tiny-form-item label="个人交医疗险" prop="one">
          <tiny-input
            v-model="createData.one"
            placeholder="请输入内容"
            type="form"
            readonly
            vertical
          ></tiny-input>
        </tiny-form-item>
        <tiny-form-item label="个人交失业险" prop="two">
          <tiny-input
            v-model="createData.two"
            placeholder="请输入内容"
            type="form"
            readonly
            vertical
          ></tiny-input>
        </tiny-form-item>
        <tiny-form-item label="个人交住房金" prop="three">
          <tiny-input
            v-model="createData.three"
            placeholder="请输入内容"
            type="form"
            readonly
            vertical
          ></tiny-input>
        </tiny-form-item>
      </tiny-form>
    </div>
    <div class="padds">
      <tiny-form id="longLabelTwo" :model="createData" label-position="top">
        <tiny-form-item
          label="上下结构上下结构上下结构上下结构上下结构上下结构上下结构上下结构上下结构上下结构上下结构上下结构上下结构上下结构上下结构"
          prop="users"
        >
          <tiny-input
            v-model="createData.text1"
            placeholder="请输入内容"
            type="textarea"
          ></tiny-input>
        </tiny-form-item>
      </tiny-form>
    </div>
  </div>
</template>

<script>
import { Form, FormItem, Input } from '@opentiny/vue'

export default {
  components: {
    TinyForm: Form,
    TinyFormItem: FormItem,
    TinyInput: Input
  },
  data() {
    return {
      menus: [
        {
          id: 1,
          label:
            '我是小花,我是小花,我是小花,我是小花,我是小花,我是小花,我是小花'
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
      ],
      createData: {
        users: '-500.00',
        user: '',
        one: '-200.00',
        two: '-252.50',
        three: '-1458.60',
        text1:
          '很长的文本很长的文本很长的文本很长的文本很长的文本很长的文本很长的文本很长的文本很长的文本很长的文本很长的文本很长的文本'
      },
      rules: {}
    }
  },
  methods: {}
}
</script>

<style scoped>
.padds {
  padding-right: 15px;
  padding-left: 15px;
  background: white;
  margin-bottom: 20px;
}
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
.demo-form {
  height: 100%;
  overflow: auto;
  padding-left: 16px;
  background: #f4f4f4;
}
.padds .tiny-mobile-input-form__input {
  text-align: right;
}
</style>

<style>
#longLabelTwo .tiny-mobile-form-item__label {
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  display: -webkit-box;
}
</style>
