<template>
  <tiny-edoc :fetch-download="downLoadHandler" :fetch-delete="deleteHandler" :fetch-update="updateHandler" :direct-download="true"></tiny-edoc>
</template>

<script>
import { Edoc } from '@opentiny/vue'

export default {
  components: {
    TinyEdoc: Edoc
  },
  methods: {
    downLoadHandler(edocData) {
      return new Promise((resolve, reject) => {
        this.$service.network
          .get('servlet/edm/downloadDocumentServlet?docId=' + edocData.docId + '&docType=hw_delivery_ca&docVersion=V1&quickFlag=undefined&downloadFlag=one')
          .then((res) => {
            let xml =
              '<form action="//edoc-beta.huawei.com/edoc/download.do" name="fastDownloadForm" method="post" target="fastDownloadIframe"><input type="hidden" name="hw_document_code" value="' +
              res.data.hwDocumentCode +
              '"/><input type="hidden" name="' +
              res.data.hwDocType +
              '" value="hw_delivery_ca"/></form>'
            resolve({
              url: res.data.edocUploadFileAction + '?hw_document_code=' + res.data.hwDocumentCode + '&hw_doc_type=' + res.data.hwDocType,
              xml
            })
          })
          .catch(reject)
      })
    },
    updateHandler() {
      return new Promise((resolve) => {
        resolve('Success!')
      })
    },
    deleteHandler(edocData) {
      return new Promise((resolve, reject) => {
        this.$service.network
          .get('servlet/edm/deleteDocumentServlet?docType=hw_delivery_ca&docId=' + edocData.docId)
          .then((res) => {
            resolve(res.data)
          })
          .catch(reject)
      })
    }
  }
}
</script>
