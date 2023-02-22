<template>
  <div>
    <p>
      <button @click="uploadDocument">上传文档</button>
      <button @click="directDownloadDocument">直接下载文档</button>
      <button @click="downloadDocument">进入下载页面</button>
      <button @click="updateDocument">更新文档</button>
      <button @click="deleteDocument">删除文档</button>
    </p>
    <br /><br />
    <tiny-edoc ref="edoc"></tiny-edoc>
  </div>
</template>

<script>
import { Edoc } from '@opentiny/vue'

export default {
  components: {
    TinyEdoc: Edoc
  },
  methods: {
    getDocId() {
      const downloadList = this.$refs.edoc.state.downloadList

      return downloadList.length && downloadList[0].doc_id
    },
    cancel() {
      this.$refs.edoc.cancel(this.getDocId())
    },
    close() {
      this.$refs.edoc.close()
    },
    uploadDocument() {
      this.$refs.edoc.uploadDocument('one')
    },
    deleteDocument() {
      this.$refs.edoc.deleteDocument(this.getDocId())
    },
    directDownloadDocument() {
      this.$refs.edoc.directDownloadDocument({ doc_id: this.getDocId() })
    },
    downloadDocument() {
      this.$refs.edoc.downloadDocument({ doc_id: this.getDocId() })
    },
    updateDocument() {
      this.$refs.edoc.updateDocument(this.getDocId())
    }
  }
}
</script>
