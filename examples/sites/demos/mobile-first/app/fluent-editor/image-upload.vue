<template>
  <div>
    <tiny-fluent-editor v-model="content" :image-upload="imageUpload"></tiny-fluent-editor>
    内容：<br />
    {{ content }}
  </div>
</template>

<script>
import { Modal } from '@opentiny/vue'
import TinyFluentEditor from '@opentiny/vue-fluent-editor'

export default {
  components: {
    TinyFluentEditor
  },
  data() {
    return {
      content: '{"ops":[{"insert":"Hello "},{"attributes":{"bold":true},"insert":"FluentEditor"},{"insert":"!"}]}',
      imageUpload: {
        url: 'https://run.mocky.io/v3/f34365b4-679d-4e8f-8313-ddb11d6750be',
        method: 'POST',
        name: 'image',
        withCredentials: true,
        headers: {},
        success: (serverResponse, next) => {
          let file = {}

          for (const key in serverResponse) {
            file = serverResponse[key]
            break
          }

          next(file.downloadUrl)
        },
        fail: (serverError) => {
          Modal.message({
            message: `上传失败回调事件：${serverError}`,
            status: 'info'
          })
        }
      }
    }
  }
}
</script>
