<template>
  <tiny-file-upload
    ref="upload"
    :action="action"
    :file-list="fileList"
    :auto-upload="false"
    :before-remove="beforeRemove"
    success-statistics
  >
    <template #trigger>
      <icon-upload></icon-upload>
    </template>
  </tiny-file-upload>
</template>

<script lang="jsx">
import { TinyFileUpload, TinyModal } from '@opentiny/vue-mobile'
import { iconUpload } from '@opentiny/vue-icon'

export default {
  components: {
    TinyFileUpload,
    IconUpload: iconUpload()
  },
  data() {
    return {
      action: '',
      fileList: [
        {
          name: 'test1',
          url: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/ld.png`
        }
      ]
    }
  },
  methods: {
    beforeRemove(file) {
      return new Promise((resolve, reject) => {
        TinyModal.confirm(`确定移除 ${file.name}？`).then((res) => {
          res === 'confirm' ? resolve() : reject(new Error('取消移除'))
        })
      })
    }
  }
}
</script>
