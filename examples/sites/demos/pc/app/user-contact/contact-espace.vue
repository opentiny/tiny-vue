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
        imgUrl: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/ld.png`,
        userName: '张三',
        roleNumber: 'z00100001',
        values: [
          { text: '部门', value: '云部门' },
          { text: '邮件', value: 'zhangsan@xxx.com' },
          { text: '手机', value: '+86-15011111111' }
        ]
      },
      espace: [
        { type: 'im', value: 'z00100001', icon: 'icon-dialog' },
        { type: 'sip', value: 'z00100001', icon: 'icon-telephone' },
        {
          type: 'mailto',
          value: 'zhangsan@xxx.com',
          icon: 'icon-email-add'
        }
      ]
    }
  }
}
</script>
