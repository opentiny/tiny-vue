<template>
  <tiny-user-contact :data="data" :espace="espace"></tiny-user-contact>
</template>

<script>
import { UserContact } from '@opentiny/vue'

export default {
  components: {
    TinyUserContact: UserContact
  },
  data() {
    return {
      data: {
        imgUrl: 'static/images/user-head.png',
        userName: '小红',
        userDescription: 'test1',
        values: [
          { text: '部门', value: '某部门' },
          { text: '邮件', value: 'example@example.com' },
          { text: '手机', value: '1234567890' }
        ]
      },
      espace: [
        { type: 'im', value: 'test1', icon: 'icon-message-circle' },
        { type: 'sip', value: 'test1', icon: 'icon-telephone-circle' },
        {
          type: 'mailto',
          value: 'example@example.com',
          icon: 'icon-email-circle'
        }
      ]
    }
  }
}
</script>
