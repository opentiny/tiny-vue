<template>
  <tiny-hrapprover
    v-model="value"
    :approval-person="person"
    @update:approval-person="person = $event"
    :fetch-hrapprover="getFetchHrapprover"
    :category="category"
  ></tiny-hrapprover>
</template>

<script>
import { Hrapprover } from '@opentiny/vue'

export default {
  components: {
    TinyHrapprover: Hrapprover
  },
  data() {
    return {
      value: '022471',
      person: 'wangxiaofeng 00193664',
      category: '0303'
    }
  },
  methods: {
    getFetchHrapprover() {
      let that = this

      return new Promise((resolve, reject) => {
        that.$service.network
          .get('servlet/idataProxy/params/ws/soaservices/HRApproverServlet', {
            params: {
              code: that.value,
              category: that.category
            }
          })
          .then((response) => {
            resolve((response.data && response.data.hrpa) || [])
          })
          .catch(reject)
      })
    }
  }
}
</script>
