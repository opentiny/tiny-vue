<template>
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
          <div class="tiny-upload__tip">只能上传jpg/png文件</div>
        </template>
      </tiny-file-upload>
    </tiny-form-item>
  </tiny-form>
  <tiny-button type="success" @click="handleSubmit">提交</tiny-button>
</template>

<script setup lang="jsx">
import { ref, reactive } from 'vue'
import {
  Form as TinyForm,
  FormItem as TinyFormItem,
  FileUpload as TinyFileUpload,
  Button as TinyButton,
  Modal
} from '@opentiny/vue'

const action = ref('http://localhost:3000/api/upload')
const ruleFormRef = ref(null)

const fileList = reactive([])

const createData = reactive({
  files: '' // 上传成功返回的数据
})

const validatePass = (rule, value, callback) => {
  if (value) {
    callback()
  } else {
    callback(new Error('请至少上传一个文件'))
  }
}

const rules = reactive({
  files: [
    { required: true, message: '请至少上传一个文件', trigger: 'change' },
    { validator: validatePass, trigger: 'change' }
  ]
})

const uploadSuccess = () => {
  // 模拟上传成功后，返回的数据信息,以此通过validatePass的校验
  createData.files = `https://res.hc-cdn.com/tiny-vue-web-doc/3.10.5.20230903162611/static/images/book.jpg`
}

const beforeUpload = (file) => {
  fileList.push({ name: file.name, url: file.url })
  uploadSuccess()
}

const handleSubmit = () => {
  ruleFormRef.value.validate((valid) => {
    if (valid) {
      Modal.alert('校验通过')
    } else {
      Modal.message({ message: '校验不通过！！', status: 'warning' })
      return false
    }
  })
}

const handleRemove = (file) => {
  const index = fileList.findIndex((item) => item.name === file.name)
  fileList.splice(index, 1)
  console.log('fileList', fileList)
  createData.files = ''
}
</script>
