<template>
  <tiny-edoc
    @before-delete="beforeDelete"
    @before-download="beforeDownload"
    @before-upload="beforeUpload"
    @complete="complete"
    @delete-complete="deleteComplete"
  ></tiny-edoc>
</template>

<script>
import { Edoc, Modal } from '@opentiny/vue'

export default {
  components: {
    TinyEdoc: Edoc
  },
  methods: {
    beforeDelete(event) {
      event.preventDefault() // 阻止浏览器默认事件，可以阻止删除
    },
    beforeDownload() {
      return true
    },
    beforeUpload() {
      return true
    },
    complete() {
      Modal.message({ message: 'complete event!', status: 'info' })
    },
    deleteComplete() {
      Modal.message({ message: 'deleteComplete event!', status: 'info' })
    }
  }
}
</script>
