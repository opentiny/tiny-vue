<template>
  <tiny-file-upload
    ref="uploadRef"
    :action="action"
    file-title="我是标题"
    :file-list="fileList"
    :file-icon-list="iconList"
  >
    <template #trigger>
      <tiny-icon-upload></tiny-icon-upload>
    </template>
  </tiny-file-upload>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { TinyFileUpload } from '@opentiny/vue-mobile'
import { iconUpload } from '@opentiny/vue-icon'

const action = ref('http://localhost:3000/api/upload')
const fileList = ref([
  {
    name: 'test1名字很长名字很长名字很长名字很长名字很长名字很长',
    url: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/ld.png`,
    size: '1M',
    fileType: 'png'
  },
  {
    name: 'test2',
    url: 'http://localhost:3000/upload/test2.xlsx',
    size: '1M',
    fileType: 'xlsx'
  }
])
const iconList = ref([
  {
    url: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/dog2.png`,
    type: 'png'
  },
  {
    url: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/dog1.png`,
    type: 'xlsx'
  }
])
const TinyIconUpload = iconUpload()
</script>
