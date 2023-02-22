<template>
  <div>
    <tiny-edoc ref="edoc">
      <button @click="fetchHandler">自定义默认插槽</button>
    </tiny-edoc>
  </div>
</template>

<script>
import { Edoc } from '@opentiny/vue'

export default {
  components: {
    TinyEdoc: Edoc
  },
  data() {
    return {}
  },
  methods: {
    fetchHandler() {
      const docCookieId = this.$refs.edoc.state.docCookieId

      return new Promise((resolve, reject) => {
        this.$service.network
          .get('/servlet/edm/uploadDocumentServlet?hw_business_key=hw_delivery_ca&docCookieId=' + docCookieId + '&docType=hw_delivery_ca')
          .then((res) => {
            resolve(
              'http://edoc-beta.huawei.com/edoc/EdocAction.do?hw_document_code=' +
                res.data.hwDocumentCode +
                '&hw_doc_type=' +
                res.data.hwDocType +
                '&hw_business_key=' +
                res.data.hwBusinessKey +
                '&doc_cookie_id=' +
                res.data.docCookieId +
                '&methodFlag=uploadDocument&uploadFlag=' +
                res.data.uploadFlag +
                '&returnFlag='
            )
          })
          .catch(reject)
      })
    }
  }
}
</script>
