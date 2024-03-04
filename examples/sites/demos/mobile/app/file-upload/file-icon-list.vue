<template>
  <tiny-file-upload ref="upload" :action="action" :file-list="fileList" :file-icon-list="iconList">
    <template #trigger>
      <icon-upload></icon-upload>
    </template>
  </tiny-file-upload>
</template>

<script lang="jsx">
import { FileUpload } from '@opentiny/vue'
import { iconUpload } from '@opentiny/vue-icon'

export default {
  components: {
    TinyFileUpload: FileUpload,
    IconUpload: iconUpload()
  },
  data() {
    return {
      action: 'http://localhost:3000/api/upload',
      fileList: [
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
      ],
      iconList: [
        {
          url: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/dog2.png`,
          type: 'png'
        },
        {
          url: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/dog1.png`,
          type: 'xlsx'
        }
      ]
    }
  }
}
</script>
