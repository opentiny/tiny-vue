<template>
  <div>
    <tiny-form
      ref="ruleFormRef"
      :model="createData"
      :validate-on-rule-change="true"
      :rules="rules"
      label-width="0px"
      validate-type="text"
    >
      <tiny-form-item prop="files" :inline-message="true">
        <tiny-file-upload
          :file-list="fileList"
          ref="upload"
          :action="action"
          accept=".jpg,.png"
          :before-upload="beforeUpload"
          @remove="handleRemove"
        >
          <template #trigger>
            <tiny-button type="primary">选取文件</tiny-button>
          </template>
          <template #tip>
            <div class="tiny-upload__tip">只能上传 jpg/png 文件</div>
          </template>
        </tiny-file-upload>
      </tiny-form-item>
    </tiny-form>
    <tiny-button type="success" @click="handleSubmit">提交</tiny-button>
  </div>
</template>

<script>
import { Form, FormItem, FileUpload, Button, Modal } from '@opentiny/vue'

export default {
  components: {
    TinyForm: Form,
    TinyFormItem: FormItem,
    TinyFileUpload: FileUpload,
    TinyButton: Button
  },
  data() {
    const validatePass = (rule, value, callback) => {
      if (value) {
        callback()
      } else {
        callback(new Error('请至少上传一个文件'))
      }
    }

    return {
      action: 'http://localhost:3000/api/upload',
      fileList: [],
      createData: {
        files: '' // 上传成功返回的数据
      },
      rules: {
        files: [
          { required: true, message: '请至少上传一个文件', trigger: 'change' },
          { validator: validatePass, trigger: 'change' }
        ]
      }
    }
  },
  methods: {
    uploadSuccess() {
      // 模拟上传成功后，返回的数据信息,以此通过validatePass的校验
      this.createData.files = `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/book.jpg`

      // 上传成功后再进行表单验证
      this.formValidate()
    },
    beforeUpload(file) {
      this.fileList.push({ name: file.name, url: file.url })
      this.uploadSuccess()
    },
    formValidate() {
      this.$refs.ruleFormRef.validate((valid) => {
        if (valid) {
          Modal.alert('校验通过')
        } else {
          Modal.message({ message: '校验不通过', status: 'warning' })
          return false
        }
      })
    },
    handleSubmit() {
      this.formValidate()
    },
    handleRemove(file) {
      const index = this.fileList.findIndex((item) => item.name === file.name)
      this.fileList.splice(index, 1)
      this.createData.files = ''
    }
  }
}
</script>
