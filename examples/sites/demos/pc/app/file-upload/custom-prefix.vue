<template>
  <div>
    <tiny-file-upload
      :action="action"
      :before-add-file="beforeAddFile"
      :before-remove="beforeRemove"
      :before-upload="beforeAvatarUpload"
      multiple
      :limit="3"
      :file-list="fileList"
    >
      <tiny-button type="primary">点击上传</tiny-button>
    </tiny-file-upload>
  </div>
</template>

<script>
import { FileUpload, Button } from '@opentiny/vue'
import Modal from '@opentiny/vue-modal'

export default {
  components: {
    TinyFileUpload: FileUpload,
    TinyButton: Button
  },
  data() {
    return {
      action: 'http://localhost:3000/api/upload',
      fileList: [
        {
          name: 'test1',
          url: 'static/images/ld.png'
        },
        {
          name: 'test2',
          url: 'static/images/ry.png'
        }
      ]
    }
  },
  methods: {
    beforeAddFile(callback) {
      // 方式 1：直接返回 Boolean 值
      // return false

      // 方式 2：返回 Promise 异步
      // return new Promise((resolve, reject) => {
      //   Modal.message({ message: '2 秒后弹出文件选择框', status: 'info' })
      //   setTimeout(() => {
      //     resolve()
      //   }, 2000)
      // })

      // 方式 3：调用回调函数
      Modal.confirm({
        title: 'beforeAddFile 钩子函数',
        status: 'info',
        message: '您确定要继续添加文件吗？',
        events: {
          confirm({ type, $modal, options }) {
            // 满足条件，执行回调函数继续添加文件
            callback()
          }
        }
      })
    },
    beforeRemove() {
      Modal.message({ message: '触发删除文件前回调事件', status: 'info' })
      return true
    },
    beforeAvatarUpload() {
      Modal.message({ message: '触发上传前回调事件', status: 'info' })
      return true
    }
  }
}
</script>
