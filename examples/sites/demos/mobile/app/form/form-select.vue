<template>
  <div class="demo-form">
    <div class="page__hd">
      <h1 class="page__title">Form</h1>
      <p class="page__desc">表单（选择）</p>
    </div>
    <div class="demo-form-select-padds">
      <tiny-form ref="ruleForm" :model="createData" :rules="rules">
        <tiny-form-item label="标题">
          <tiny-input
            v-model="createData.user1"
            is-select
            :select-menu="menus"
            placeholder="请输入内容"
            type="form"
          ></tiny-input>
        </tiny-form-item>
      </tiny-form>
    </div>
    <div class="demo-form-select-padds">
      <tiny-form ref="ruleForm" :model="createData" :rules="rules" label-position="left">
        <tiny-form-item label="标题">
          <tiny-input
            v-model="createData.user1"
            is-select
            :select-menu="menus"
            placeholder="请输入内容"
            type="form"
          ></tiny-input>
        </tiny-form-item>
      </tiny-form>
    </div>
    <div class="demo-form-select-padds">
      <tiny-form ref="ruleForm" :model="createData" :rules="rules" label-position="left">
        <tiny-form-item label="标题">
          <tiny-input
            v-model="createData.user1"
            is-select
            :select-menu="menus"
            placeholder="请输入内容"
            type="form"
          ></tiny-input>
        </tiny-form-item>
        <div class="lableTip">
          辅助文本说明超过3行辅助文本说明辅助文本说明辅助文本说明辅助文本说明辅助文本说明辅助文本说明辅助文本说明辅助文本说明辅助文本说明辅助文本说明辅助文本说明辅助文本说明辅助文本说明
        </div>
      </tiny-form>
    </div>
    <div class="demo-form-select-padds">
      <tiny-form ref="ruleForm" :model="createData" :rules="rules" label-position="left">
        <tiny-form-item label="标题">
          <tiny-input
            v-model="createData.user1"
            is-select
            :select-menu="menus"
            placeholder="请输入内容"
            type="form"
          ></tiny-input>
        </tiny-form-item>
        <div class="lableTip">辅助文本说明未超3行</div>
        <tiny-form-item label="标题" vertical>
          <tiny-input
            v-model="createData.user4"
            is-select
            :select-menu="menus"
            placeholder="请输入内容"
            type="form"
            mobile-tips="辅助文本说明未超过3行"
          ></tiny-input>
        </tiny-form-item>
        <tiny-form-item label="标题" vertical>
          <tiny-input
            v-model="createData.user3"
            is-select
            :select-menu="menus"
            placeholder="请输入内容"
            type="form"
            mobile-tips="辅助文本说明超过3行辅助文本说明辅助文本说明辅助文本说明辅助文本说明辅助文本说明辅助文本说明辅助文本说明辅助文本说明辅助文本说明辅助文本说明辅助文本说明辅助文本说明辅助文本说明"
          ></tiny-input>
        </tiny-form-item>
      </tiny-form>
    </div>
    <div class="demo-form-select-padds">
      <tiny-form ref="ruleForm" :model="createData" :rules="rules" label-position="top">
        <tiny-form-item label="标题" vertical>
          <tiny-input
            v-model="createData.user2"
            is-select
            :select-menu="menus"
            placeholder="请输入内容"
            type="form"
          ></tiny-input>
        </tiny-form-item>
        <tiny-form-item label="标题" vertical>
          <tiny-input
            v-model="createData.user4"
            is-select
            :select-menu="menus"
            placeholder="请输入内容"
            type="form"
            mobile-tips="辅助文本说明未超过3行"
          ></tiny-input>
        </tiny-form-item>
        <tiny-form-item label="标题" vertical>
          <tiny-input
            v-model="createData.user3"
            is-select
            :select-menu="menus"
            placeholder="请输入内容"
            type="form"
            mobile-tips="辅助文本说明超过3行辅助文本说明辅助文本说明辅助文本说明辅助文本说明辅助文本说明辅助文本说明辅助文本说明辅助文本说明辅助文本说明辅助文本说明辅助文本说明辅助文本说明辅助文本说明"
          ></tiny-input>
        </tiny-form-item>
      </tiny-form>
    </div>
  </div>
</template>

<script lang="jsx">
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
          id: '小花',
          label: '我是小花,我是小花,我是小花,我是小花,我是小花,我是小花,我是小花'
        },
        {
          id: '小树',
          label: '我是小树'
        },
        {
          id: '小草',
          label: '我是小草'
        },
        {
          id: '小叶',
          label: '我是小叶',
          warn: true
        }
      ],
      createData: {
        users: '',
        user1: '',
        user2: '',
        user3: '',
        user4: ''
      },
      rules: {
        users: [{ required: true, message: '必填', trigger: 'change' }]
      }
    }
  },
  methods: {}
}
</script>

<style scoped>
.demo-form-select-padds {
  padding-right: 15px;
  padding-left: 15px;
  background: white;
  margin-bottom: 15px;
}
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
  padding-left: 16px;
  background: #f4f4f4;
}
.lableTip {
  color: #999;
  font-size: 14px;
  margin-bottom: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  display: -webkit-inline-box;
}
</style>

<style>
.demo-form-select-padds .tiny-mobile-input-form__input {
  text-align: right;
}
</style>
